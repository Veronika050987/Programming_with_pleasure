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
        about_khao: "Программирование это весело. Особенно первые пять минут, пока ты не пропустил одну запятую и не ушел искать её до трех часов ночи.",
        about_bee: "Программирование и пчела связаны напрямую: нужно построить идеальную архитектуру-соты, искать подходящие цветы-части кода, жужжать над кодом всей командой и собирать сладкий нектар работающего релиза.",
        game_race_title: "Гонка цифровых пакетов",
        game_race_desc: "Управляйте роутером и браузером, чтобы собрать страницу, как истечет таймер",
        game_quiz_title: "Квиз в стихах",
        game_quiz_desc: "Ответьте на вопросы квиза",
        game_state_title: "Состояние",
        game_state_desc: "State хранит состояние классового компонента.",
        homepage: "На главную"
    },
    en:
    {
        menu_home: "Home page",
        menu_about: "Programming is ...",
        menu_games: "Games",
        about_title: "Programming with pleasure",
        about_lemour: "Programming teaches us to see like a lemur - to notice the smallest bugs in the dark of code, open our eyes wide with surprise and deftly jump across branches in Git.",
        about_khao: "Programming is fun. Especially the first five minutes, until you missed one comma and went to look for it until three in the morning.",
        about_bee: "Programming and a bee are directly connected: you need to build the perfect honeycomb-architecture, look for suitable flowers-pieces of code, buzz over the code with the whole team and collect the sweet nectar of a working release.",
        game_race_title: "Packet race game",
        game_race_desc: "Control the router and the browser to assemble the webpage before a timer runs out",
        game_quiz_title: "Quitz in poems",
        game_quiz_desc: "Answer quitz questions",
        game_state_title: "State",
        game_state_desc: "State stores the state of a class component.",
        homepage: "Home page"
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