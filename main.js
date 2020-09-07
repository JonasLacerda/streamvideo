
const {app, BrowserWindow, globalShortcut, Tray, Menu} = require('electron')
const path = require('path')


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.resolve(__dirname, 'icon.png'),
    webPreferences: {
      zoomFactor: 1,
      allowRunningInsecureContent: true,
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()


  const tray = new Tray(
    path.resolve(__dirname, 'icon.png')
  )

  tray.setContextMenu(
        Menu.buildFromTemplate([{
                label: "Chaturbate",
                submenu: [{
                        label: "Catia",
                        click() {
                            tray.on()
                        }
                    },
                    {
                        label: "Juliana",
                        click() {
                            tray.on()
                        }
                    }
                ],
            },
            {
                label: "Quit",
                click() {
                    app.quit()
                }

            },

        ]),
    )
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  globalShortcut.register('CommandOrControl+p', () => {
    console.log('CommandOrControl+p is pressed')
  })
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
