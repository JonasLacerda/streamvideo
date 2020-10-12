var db = openDatabase("dbmodelo", "1.0", "Web SQL Database", 2 * 1024 * 1024)

db.transaction (function (tx) { tx.executeSql ("CREATE TABLE IF NOT EXISTS tmodelo (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, modelo TEXT, site TEXT)")})

function addModelo(){
    var nome = document.getElementById('nome').value
    var site = document.getElementById('site2').value
    if(nome != '' && site != ''){
        db.transaction (function (tx) { tx.executeSql ("INSERT INTO tmodelo (modelo, site) values(?, ?)", [nome, site])})
        document.getElementById('nome').value = ''        
        
        vermodelo(site)
    }else{
        alert('vazio')
    }
}

function vermodelo(site){
    if(site === 'chaturbate') {
        db.transaction(function(tx) {
            tx.executeSql(
            'SELECT * FROM tmodelo WHERE site = ? ORDER BY modelo ASC;', [site],
                function(tx, results){
                    var exlist = document.getElementById("nomemodelo");
                    exlist.innerHTML = '<li>Modelos</li>'
                    for(var i = 0; i < results.rows.length; i++) {
                        var row = results.rows.item(i);
                        var l1 = document.createElement('button')
                        var idb = document.createAttribute('id')
                        idb.value = row.modelo.toString()
                        var at = document.createAttribute('onclick')
                        at.value = 'chaturbate("'+row.modelo.toString()+'")' 
                                                
                        var text = row.modelo+'<img class="imgg" src="https://roomimg.stream.highwebmedia.com/riw/'+row.modelo.toString()+'.jpg">'                    
                        l1.setAttributeNode(at)
                        l1.setAttributeNode(idb)
    
                        l1.innerHTML = text
                        exlist.appendChild(l1)
                         
                    }
                }
            )
        })
    }else if (site === 'camSoda') {
        db.transaction(function(tx) {
            tx.executeSql(
            'SELECT * FROM tmodelo WHERE site = ? ORDER BY modelo ASC;', [site],
                function(tx, results){
                    var exlist = document.getElementById("nomemodelo");
                    exlist.innerHTML = '<li>Modelos</li>'
                    for(var i = 0; i < results.rows.length; i++) {
                        var row = results.rows.item(i);
                        var l1 = document.createElement('button')
                        var idb = document.createAttribute('id')
                        idb.value = row.modelo.toString()
                        var at = document.createAttribute('onclick')
                        at.value = 'camSoda("'+row.modelo.toString()+'")' 
                                                
                        var text = row.modelo+'<video class="imgg" src="https://media.camsoda.com/media/vthumbs/'+row.modelo+'.mp4">'                    
                        l1.setAttributeNode(at)
                        l1.setAttributeNode(idb)
    
                        l1.innerHTML = text
                        exlist.appendChild(l1)
                         
                    }
                }
            )
        })
        
    } else if(site === 'cam4'){
        db.transaction(function(tx) {
            tx.executeSql(
            'SELECT * FROM tmodelo WHERE site = ? ORDER BY modelo ASC;', [site],
                function(tx, results){
                    var exlist = document.getElementById("nomemodelo");
                    exlist.innerHTML = '<li>Modelos</li>'
                    for(var i = 0; i < results.rows.length; i++) {
                        var row = results.rows.item(i);
                        var l1 = document.createElement('button')
                        var idb = document.createAttribute('id')
                        idb.value = row.modelo.toString()
                        var at = document.createAttribute('onclick')
                        at.value = 'cam4("'+row.modelo.toString()+'")' 
                        
                        var text = row.modelo + '<img class="imgg" src="https://snapshots.xcdnpro.com/thumbnails/'+row.modelo.toString()+'.jpg">'                    
                        l1.setAttributeNode(at)
                        l1.setAttributeNode(idb)
    
                        l1.innerHTML = text
                        exlist.appendChild(l1)
                         
                    }
                }
            )
        })
    }
}

//https://snapshots.xcdnpro.com/thumbnails/
vermodelo('camSoda')
console.log(db);
if(!db){
    alert('deu pau!');
}