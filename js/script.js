var title = document.querySelector('#title');
var year = document.querySelector('#year');
var apiKey = 'apikey=6cdda3fb';
var xhr = new XMLHttpRequest();

function findFilm(){
    if(!title.value){
        alert('O campo titulo é obrigatório');
        return false;
    }else{
        xhr.open('GET', `https://www.omdbapi.com/?t=${title.value}&y=${year.value}&${apiKey}`, true);
        xhr.onload = function(){
            
            if(xhr.status === 200){
                var data = JSON.parse(xhr.responseText);
                if(data['Response'] === 'False'){
                    alert(`${data['Error']}`);
                    return false;
                }
                document.querySelector('.title-film').innerHTML = `${data['Title']}`;
                document.querySelector('.img-film').src = `${data['Poster']}`;
                document.querySelector('.year-film').innerHTML = `Ano: ${data['Year']}`;
                document.querySelector('.genre').innerHTML = `Genero: ${data['Genre']}`;
                document.querySelector('.description').innerHTML = `Descrição: ${data['Plot']}`;
                document.querySelector('.duration').innerHTML = `Duração: ${data['Runtime']}`;
                document.querySelector('.avaliation').innerHTML = `Avaliação: ${data['imdbRating']}`;
                document.querySelector('.votes').innerHTML = `Votos: ${data['imdbVotes']}`;
                alterCss(document.querySelectorAll(['.duration', '.avaliation', '.votes']));
            }else{
                console.error('Falha na conexão com API')
            }
        }
        xhr.send();   
    }
}

function alterCss(value){
    for(let i = 0; i< value.length; i++){
        value[i].style.border = '1px solid white';
    }
}

