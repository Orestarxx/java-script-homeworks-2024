

// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let mainDiv = document.createElement('div');
mainDiv.classList.add('collapse','alpha','beta');
mainDiv.setAttribute('id','main');

mainDiv.innerText = 'Hello world';
document.body.appendChild(mainDiv);

let cloned = document.querySelector('#main').cloneNode(true);
cloned.setAttribute('id','cloned');
document.body.appendChild(cloned);

 let hr = document.createElement('hr');
document.body.appendChild(hr);
// - Є масив:
let arrayOfStrings =     ['Main','Products','About us','Contacts']

// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
 let ulList = document.createElement('ul');
document.body.appendChild(ulList);
arrayOfStrings.forEach((str) =>{
   let li = document.createElement("li");
    li.innerText = `${str}`;
    ulList.appendChild(li);
});

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let mainCoursesDiv = document.createElement('div');
document.body.appendChild(mainCoursesDiv);
mainCoursesDiv.setAttribute('id','mainCourses');
coursesAndDurationArray.forEach((course) =>{
   let courseInfo =  document.createElement('div');
   courseInfo.classList.add('course');
   courseInfo.innerHTML = ` Назва:${course.title} <br>Тривалість: ${course.monthDuration}`;
   mainCoursesDiv.appendChild(courseInfo);
});

// =========================

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
 let coursesDivOne =  document.createElement('div');
 coursesDivOne.setAttribute('id','mainCourses1');
document.body.appendChild(coursesDivOne);
// ==========================
coursesAndDurationArray.forEach(course =>{
   let courseDiv = document.createElement('div');
   courseDiv.classList.add('item');
   coursesDivOne.appendChild(courseDiv); //add
   let courseH1Element = document.createElement('h1');
   courseH1Element.classList.add('heading');
   courseH1Element.innerText = `${course.title}`;
   let courseParagraph = document.createElement('p');
    courseParagraph.classList.add('description');
    courseParagraph.innerText = `${course.monthDuration}`;
    courseDiv.append(courseH1Element,courseParagraph);

});
let hr1 = document.createElement('hr');
document.body.appendChild(hr1);
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
 let simpsonsHolder = document.createElement('div');
 simpsonsHolder.setAttribute('id','simpsonsHolder');
 document.body.appendChild(simpsonsHolder);
 simpsons.forEach(simpson =>{
   const simpsonMember = document.createElement('div');
   simpsonMember.classList.add('member');
   simpsonsHolder.appendChild(simpsonMember);//add
   const nameSurnameAge =   document.createElement('h3');
   nameSurnameAge.innerHTML = `${simpson.name} ${simpson.surname} <br> ${simpson.age}`;
   const photo = document.createElement('img');
   photo.src =`${simpson.photo}`;
   let simpsonInfo = document.createElement('p');
   simpsonInfo.innerText =`${simpson.info}`;
   simpsonMember.append(nameSurnameAge,photo, simpsonInfo); //add
 });


// ==========

// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
const divHolder = document.createElement('div');
divHolder.classList.add('divHolder');
document.body.appendChild(divHolder);
let div1 = document.createElement('div');
div1.classList.add('child');
div1.innerText = "hello1";
div1.style.height ='200px';
let div2 = document.createElement('div');
div2.classList.add('child');
div2.innerText = "hello2";
div2.style.height ='220px';
let div3 = document.createElement('div');
div3.classList.add('child');
div3.innerText = "hello3";
div3.style.height ='250px';
divHolder.append(div1,div2,div3);
console.log(divHolder);

console.dir(document);
let divHolderCollection = document.body.children[9].childNodes;
divHolderCollection.forEach((child) =>{
    child.style.height = div3.style.height;

})
// =========================

// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
 let courseHolder1 = document.createElement('div');
 courseHolder1.setAttribute('id','coursesHolderDiv');
 document.body.appendChild(courseHolder1);
coursesArray.forEach(course =>{
   const courseItem = document.createElement('div');
   courseHolder1.appendChild(courseItem);
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = `${course.title}`;
    const monthHourDurationHolder = document.createElement('div');
    monthHourDurationHolder.classList.add('monAndHourHolder');
    const monthDuration = document.createElement('div');
    monthDuration.innerHTML = `<b>Months:</b> ${course.monthDuration}`;
    const hourDuration = document.createElement('div');
    hourDuration.innerHTML = `<b>Hours:</b> ${course.hourDuration}`;
    monthHourDurationHolder.append(monthDuration,hourDuration);
    const ulList = document.createElement('ul');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = `${module}`;
        ulList.appendChild(li);
    }

    courseItem.append(title,monthHourDurationHolder,ulList);//add

});

