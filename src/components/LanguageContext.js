import React, { createContext, useState} from 'react';

const translations = 
{
    ru: 
    {
        menu_home: "Главная",
        menu_about: "Программирование это ...",
        menu_games: "Игры",
        about_title: "Программирование с удовольствием",
        about_lemour: "Программирование учит нас видеть, как лемур, - замечать мельчайшие баги в темноте кода, широко открывать глаза от удивления и ловко прыгать по веткам в Git.",
        about_khao: "Программирование это весело. Особенно первые пять минут, пока ты не пропустил одну запятую и не ушел искать её до трех часов ночи. Но именно в такие моменты и начинается самое интересное: поиск разных подходов и решений, а также переворачивание кода. Иногда приходится полностью сносить код и писать его заново. Но в этом и заключается веселье программирования.",
        about_bee: "Программирование и пчела связаны напрямую: нужно построить идеальную архитектуру-соты, искать подходящие цветы-части кода, жужжать над кодом всей командой и собирать сладкий нектар работающего релиза.",
        game_race_title: "Гонка цифровых пакетов",
        game_race_desc: "Управляйте роутером и браузером, чтобы собрать страницу перед тем, как истечет таймер",
        game_quiz_title: "Квиз в стихах",
        game_quiz_desc: "Ответьте на вопросы квиза.",
        game_sql_garage: "SQL гараж",
        game_sql_garage_desc: "Создай и управляй SQL гаражом.",
        game_house_title: "Строим дом с HTML",
        game_house_desc: "Построй дом с помощью HTML и измени его с помощью стилей CSS",
        game_kids_garage: "CRUD очень крут",
        game_kids_garage_desc: "Детский автомобильный сервис вместе с CRUD",
        homepage: "На главную",
        home_good: "Хороший код - элегантный и идеальный способ решить конкретную задачу. Плохой код это полный кошмар с ужасной структурой и без понятной цели.",
        home_ability: "Умение красиво и элегантно программировать приходит всегда со временем.",
        home_errors: "Мы учимся, делаем ошибки, пытаемся искать нестандартные решения. Чтение кода более опытных программистов помогает понять свои ошибки и получить знания о том, как нужно писать более коротко и более правильно.",
        home_standard: "Программу можно написать разными способами и с разными подходами.",
        home_task: "Задача же опытного и профессионального программиста заключается в том, чтобы написать код коротко, понятно, а самое главное так, чтобы данный код не ломался. В этом и заключается смысл программирования.",
        home_site: "Данный сайт создан для того, чтобы показать, что программирование это не просто набор знаков и символов кода. Это увлекательный процесс, который помогает видеть, понимать, размышлять и создавать очень красивые проекты."
    },
    en:
    {
        menu_home: "Home page",
        menu_about: "Programming is ...",
        menu_games: "Games",
        about_title: "Programming with pleasure",
        about_lemour: "Programming teaches us to see like a lemur - to notice the smallest bugs in the dark of code, open our eyes wide with surprise and deftly jump across branches in Git.",
        about_khao: "Programming is fun. Especially the first five minutes, until you missed one comma and went to look for it until three in the morning. But that's exactly when the most exciting part begins: searching for different approaches and solutions, and refactoring the code. Sometimes you have to completely scrap the code and rewrite it from scratch. But that is exactly what makes programming so much fun.",
        about_bee: "Programming and a bee are directly connected: you need to build the perfect honeycomb-architecture, look for suitable flowers-pieces of code, buzz over the code with the whole team and collect the sweet nectar of a working release.",
        game_race_title: "Packet race game",
        game_race_desc: "Control the router and the browser to assemble the webpage before a timer runs out",
        game_quiz_title: "Quitz in poems",
        game_quiz_desc: "Answer quitz questions",
        game_sql_garage: "SQL garage",
        game_sql_garage_desc: "Create and manage an SQL garage.",
        game_house_title: "Build a house with HTML",
        game_house_desc: "Build a house with HTML and modify it with CSS styles",
        game_kids_garage: "CRUD is so cool",
        game_kids_garage_desc: "Kids car service with CRUD",
        homepage: "Home page",
        home_good: "Good code is just an elegant and perfect way to solve a specific problem. Bad code is a total nightmare. It has a terrible structure and no clear purpose.",
        home_ability: "The ability to write a beautiful and elegant code always comes with time.",
        home_errors: "We learn, make mistakes and try to find creative solutions. Reading code written by more experienced programmers helps us understand our own mistakes and learn how to write cleaner and more accurate code.",
        home_standard: "Most blocks of code can be written in many different ways and with various approaches. ",
        home_task: "The ultimate goal of an experienced, professional developer is to write code that is short, easy to understand, and most importantly, bulletproof. That is the true essence of programming.",
        home_site: "This website was created to show that programming is more than just a random set of signs and symbols. It is an exciting process that helps you see, understand, reflect, and build truly beautiful projects."          
    }    
}

// 2. Создаем сам контекст
export const LanguageContext = createContext();

// 3. Создаем провайдер, который обернет наше приложение
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru'); // 'ru' — язык по умолчанию

  // Функция перевода, возвращающая текст по ключу
  const t = (key) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}