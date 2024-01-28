// získa odkaz na prvok s id 'theme-toggle', 'theme-stylesheet' a hlavný koreň dokumentu.
const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const rootElement = document.documentElement;

// pridajte poslúchača na udalosť kliknutia na prvok 'themeToggle'.
themeToggle.addEventListener('click', () => {
  // ak aktuálna téma je tmavá, zmeň ju na svetlú, inak naopak.
  if (rootElement.getAttribute('data-theme') === 'dark') {
    rootElement.setAttribute('data-theme', 'light');
  } else {
    rootElement.setAttribute('data-theme', 'dark');
  }
  // aktualizujte text tlačidla.
  updateButtonText();
  // aktualizujte štýl tlačidla.
  updateButtonStyle();
});

// funkcia na aktualizáciu textu tlačidla podľa aktuálnej témy.
function updateButtonText() {
  const currentTheme = rootElement.getAttribute('data-theme');
  themeToggle.textContent = currentTheme === 'dark' ? 'light mode' : 'dark mode';
}

// funkcia na aktualizáciu štýlu tlačidla podľa aktuálnej témy.
function updateButtonStyle() {
  const currentTheme = rootElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    // nastavte bielu farbu pozadia a čiernu farbu textu pre tmavý režim.
    themeToggle.style.backgroundColor = 'white';
    themeToggle.style.color = 'black';
  } else {
    // nastavte čierne farbu pozadia a bielu farbu textu pre svetlý režim.
    themeToggle.style.backgroundColor = 'black';
    themeToggle.style.color = 'white';
  }
}

// ak zariadenie preferuje tmavý farebný režim, nastavte tému na tmavý režim, inak na svetlý režim.
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  rootElement.setAttribute('data-theme', 'dark');
} else {
  rootElement.setAttribute('data-theme', 'light');
}

// aktualizujte text a štýl tlačidla pri načítaní stránky.
updateButtonText();
updateButtonStyle();

// každý objekt predstavuje konkrétny programovací jazyk a obsahuje zoznam súborov s kódom.
const t = [{
   label: "python",
   files: [{
        path: "/linux/kernel/futex/core.py",
        code: "def update_neighbors(self, grid):\n self.neighbors = []\n if self.row < self.total_rows - 1 and not grid[self.row + 1][self.col].is_barrier():\n self.neighbors.append(grid[self.row + 1][self.col])\n \n if self.row > 0 and not grid[self.row - 1][self.col].is_barrier():\n self.neighbors.append(grid[self.row - 1][self.col])\n \n if self.col < self.total_rows - 1 and not grid[self.row][self.col + 1].is_barrier():\n self.neighbors.append(grid[self.row][self.col + 1])\n \n if self.col > 0 and not grid[self.row][self.col - 1].is_barrier():\n self.neighbors.append(grid[self.row][self.col - 1])\n"
   }, {
        path: "/crypto/aegis128-core.py",
        code: "if pygame.mouse.get_pressed()[0]:\n pos = pygame.mouse.get_pos()\n row, col = get_clicked_pos(pos, ROWS, width)\n node = grid[row][col]\n if not start and node != end:\n start = node\n start.make_start()\n \n elif not end and node != start:\n end = node\n end.make_end()\n \n elif node != end and node != start:\n node.make_barrier()\n \n elif pygame.mouse.get_pressed()[2]:\n pos = pygame.mouse.get_pos()\n row, col = get_clicked_pos(pos, ROWS, width)\n node = grid[row][col]\n node.reset()\n if node == start:\n start = None\n elif node == end:\n end = None\n"
   }, {
        path: "/sound/firewire/amdtp-stream.py",
        code: "if ball.ycor() > 290:\n ball.sety(290)\n ball.dy *= -1  # Reverse the direction of ball\n winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)\n \n if ball.ycor() < -290:\n ball.sety(-290)\n ball.dy *= -1\n winsound.PlaySound('bounce.wav', winsound.SND_ASYNC)\n \n # Left & Right Border\n if ball.xcor() > 390:\n score_a += 1\n pen.clear()\n pen.write('Player A: {}  Player B: {}'.format(score_a, score_b), align='center',\n font=('Courier', 24, 'normal'))  # Update score\n ball.goto(0, 0)\n ball.dx *= -1\n \n if ball.xcor() < -390:\n score_b += 1\n pen.clear()\n pen.write('Player A: {}  Player B: {}'.format(score_a, score_b), align='center',\n font=('Courier', 24, 'normal'))\n ball.goto(0, 0)\n ball.dx *= -1\n"
   }, {
        path: "/tensorflow/framework/combinations.py",
        code: "def data_select(self):\n self.Data_Selection = str(self.string_var_data.get())\n print(self.Data_Selection)\n if self.Data_Selection=='Text':\n self.tk_Text_Data.select()\n self.tk_Image_Data.deselect()\n self.tk_Audio_Data.deselect()\n elif self.Data_Selection=='Image':\n self.tk_Text_Data.deselect()\n self.tk_Image_Data.select()\n self.tk_Audio_Data.deselect()\n else:\n self.tk_Text_Data.deselect()\n self.tk_Image_Data.deselect()\n self.tk_Audio_Data.select()\n \n def open_data_file(self):\n if self.Data_Selection == 'Audio':\n self.Data_Location = askopenfilename(initialdir = dir_path,title = 'Save file as',filetypes = (('WAV files','*.wav'),('all files','*.*')))\n elif self.Data_Selection == 'Image':\n self.Data_Location = askopenfilename(initialdir = dir_path,title = 'Save file as',filetypes = (('PNG files','*.png'),('all files','*.*')))\n else:\n pass\n self.tk_Data_File_Loc_Text.insert(tk.INSERT, self.Data_Location)\n"
   }, {
        path: "/tensorflow/core/kernels/linalg/determinant_op.py",
        code: "def print_text_box(self, string):\n self.top = tk.Toplevel(bg='#ffc0cb')\n self.top.title('Decoded text')\n self.top.geometry('275x175')\n self.tk_toplevel_text = tk.Text(self.top ,font='25', bg='white', width=25, height=7)\n self.tk_toplevel_text.grid(row=0, column=0)\n self.tk_toplevel_text.insert(tk.INSERT, string)\n self.top.mainloop()\n \n def check_saved_password(self):\n if os.path.exists('config.dat'):\n self.string_btn_password.set('Change password')\n with open('config.dat', 'r') as myFile:\n self.saved_hash = myFile.read().split('\n')[0]\n return True\n else:\n self.string_btn_password.set('Enter password')\n self.saved_hash = None\n return False\n"
   }]
}, {
    label: "c++",
    files: [{
        path: "/linux/kernel/futex/core.cpp",
        code: "#include <iostream>\n #include <string>\n #include <conio.h>\n #include <time.h>\n #include <Windows.h>\n using namespace std;\n \n double b;\n double h;\n \n void F_First();\n void F_Second();\n \n class Shape\n {\n protected:\n double base;\n double height;\n \n public:\n void get_data(double base, double height)\n {\n this->base = base;\n this->height = height;\n }\n void virtual display_area() = 0;\n };\n"
    }, {
        path: "/drivers/base/bus.cpp",
        code: "class Triangle : public Shape\n {\n public:\n void display_area()\n {\n cout << 'Area of triangle: ' << 0.5 * base * height << endl;\n }\n };\n \n class Rectanglee : public Shape\n {\n public:\n void display_area()\n {\n cout << 'Area of Rectangle: ' << base * height << endl;\n }\n };\n \n class Circle : public Shape\n {\n public:\n void display_area()\n { cout << 'Area of Circle: ' << base * base * 3.1415 << endl;\n }\n };\n"
    }, {
        path: "/sound/firewire/amdtp-stream.cpp",
        code: "private:\n double height;\n double width;\n \n public:\n Rectangle()\n {\n height = 5;\n width = 5;\n }\n \n Rectangle(double height2, double width2)\n {\n height = height2;\n width = width2;\n }\n void setHeight(double a)\n {\n height = a;\n }\n double getHeight()\n {\n return height;\n }\n void setWidth(double b)\n {\n width = b;\n }\n double getWidht()\n {\n return width;\n }\n double getArea()\n {\n return width * height;\n }\n double getPerimeter()\n {\n return 2 * (width + height);\n }\n };\n"
    }, {
        path: "/tensorflow/core/grappler/graph_topology_view.cpp",
        code: "int main()\n {\n \n string user_choise;\n main_menu_view();\n cin >> user_choise;\n \n // main_menu_validation_check\n if (user_choise == '1')\n {\n system('cls');\n int x;\n cout << 'Input Age: ';\n cin >> x;\n Person person1, person2(x);\n person1.Display();\n cout << endl;\n person2.Display();\n }\n else if (user_choise == '2')\n {\n system('cls');\n cout << 'Records: ' << endl;\n string name;\n float salary;\n string date_of_birth;\n cout << 'Name: ';\n cin >> name;\n cout << 'Salary: ';\n cin >> salary;\n cout << 'Date of birth: ';\n cin >> date_of_birth;\n \n Records record1, record2(name, salary, date_of_birth);\n record1.Display();\n record2.Display();\n cout << endl;\n \n Records *ptr = &record1;\n ptr->alert_name();\n ptr->alert_salary();\n ptr->alert_date();\n \n record1.Display();\n record2.Display();\n }\n"
    }, {
        path: "/tensorflow/core/common_runtime.cpp",
        code: "public:\n Typist()\n {\n speed = 0;\n }\n void getdata()\n {\n Staff::getdata_code();\n Staff::getdata_name();\n cout << ' Enter the speed (wprds/min): ';\n cin >> speed;\n }\n void showdata()\n {\n Staff::showdata_code();\n Staff::showdata_name();\n cout << ' Speed (words/min): ' << speed << endl;\n }\n };\n \n class Regular_Typist : public Typist\n {\n protected:\n float monthly_salary;\n \n public:\n Regular_Typist()\n {\n monthly_salary = 0.0;\n }\n void getdata()\n {\n Typist::getdata();\n cout << ' Enter the monthly salary: ';\n cin >> monthly_salary;\n }\n void showdata()\n {\n Typist::showdata();\n cout << ' Monthly salary: ' << monthly_salary << endl;\n }\n };\n"
    }]
}, {
    label: "javascript",
    files: [{
        path: "/drivers/base/bus.js",
        code: "function calculate(){\n let p =document.getElementById('p').value;\n let c =document.getElementById('c').value;\n let d =document.getElementById('d').value;\n let f =document.getElementById('f').value;\n const sum=parseFloat(p)+parseFloat(c)+parseFloat(d)+parseFloat(f)\n \n document.getElementById('demo').innerHTML= `Your Total marks is = ${sum}`;\n const percentage= (sum/400)*100;\n \n document.getElementById('demo1').innerHTML= `Your Marks Percentage is = ${percentage}%`;\n \n if(percentage>=90){\n document.getElementById('demo2').innerHTML= `Your Grade is A++`;\n }\n else if(percentage>=80){\n document.getElementById('demo2').innerHTML= `Your Grade is A`;\n }\n else if(percentage>=60){\n document.getElementById('demo2').innerHTML= `Your Grade is B++`;\n }\n else if(percentage>=40){\n document.getElementById('demo2').innerHTML= `Your Grade is B`;\n }\n else{\n document.getElementById('demo2').innerHTML= `You have failed !!`;\n }\n }\n"
    }, {
        path: "/packages/react-dom/src/server.js",
        code: "const container = document.querySelector('.container'),\n searchInput = container.querySelector('input'),\n sound = document.getElementById('sound');\n (infoText = container.querySelector('.info-text')),\n (removeIcon = container.querySelector('.search span'));\n let audio;\n \n function data(result, word) {\n if (result.title) {\n infoText.innerHTML = `Oops ;) we can't find <span>'${word}'</span>.`;\n } else {\n container.classList.add('active');\n let definitions = result[0].meanings[0].definitions[0];\n phontetics = `${result[0].meanings[0].partOfSpeech}  /${result[0].phonetics[0].text}/`;\n document.querySelector('.word p').innerText = result[0].word;\n document.querySelector('.word span').innerText = phontetics;\n document.querySelector('.meaning span').innerText = definitions.definition;\n audio = new Audio(result[0].phonetics[0].audio);\n }\n }\n"
    }, {
        path: "/tensorflow/core/common_runtime/gpu.js",
        code: "function fetchApi(word) {\n container.classList.remove('active');\n infoText.innerHTML = `Searching :) `;\n let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;\n fetch(url)\n .then((response) => response.json())\n .then((result) => data(result, word))\n .catch(() => {\n infoText.innerHTML = `Oops ;) we can't find <span>'${word}'</span>.`;\n });\n }\n \n searchInput.addEventListener('keyup', (e) => {\n let word = e.target.value.replace(/\s+/g, '');\n if (e.key == 'Enter' && word) {\n fetchApi(word);\n }\n });\n"
    }, {
        path: "/drivers/base/bus.js",
        code: "function renderFrame() {\n analayzer.getByteFrequencyData(frequencyData);\n \n for (let i = 0; i < Bar_number; i++) {\n const index = (i + 10) * 2;\n \n const fd = frequencyData[index];\n \n const bar = document.querySelector('#bar' + i);\n if (!bar) {\n continue;\n }\n \n const barHeight = Math.max(4, fd || 0);\n bar.style.height = barHeight + 'px';\n }\n \n window.requestAnimationFrame(renderFrame);\n }\n \n renderFrame();\n \n audio.volume = 0.6;\n audio.play();\n"
    }, {
        path: "/tensorflow/core/common_runtime.js",
        code: "const btn = document.getElementById('emoji-btn');\n \n const emojis = [];\n \n \n const emojiAddFunction = async () => {\n \n let res = await fetch('https://emoji-api.com/emojis?access_key=1ce9b701f975ba7b63dd065ab1e09f26e3d1e83d')\n res = await res.json()\n \n for(let i=0 ; i<res.length ; i++){\n emojis.push(res[i].character);\n }\n }\n \n emojiAddFunction();\n \n btn.addEventListener('mouseover', () => {\n btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];\n })\n \n btn.addEventListener('click', () => {\n btn.innerText = emojis[Math.floor(Math.random() * emojis.length)];\n })\n"
    }]
}]

// definícia rôznych premenných a konštánt, vrátane elementov DOM a klávesových skratiek.
const e = "Enter" // klávesa Enter
, n = "Backspace" // klávesa Backspace
, a = document.getElementById("terminal")  // element s ID "terminal" predstavujúci terminál
, r = document.getElementById("cursor") // element s ID "cursor" predstavujúci kurzor
, s = "------------------------------------------------" // oddelovací reťazec
// funkcia na odstránenie kurzoru z terminálu.
, i = () => { r.parentElement === a && a.removeChild(r) }
// funkcia na postupné vypisovanie textu do terminálu.
, o = async t => {
    i(); // odstráni kurzor
    for (const e of t)
    await l(e), // počka na dokončenie vypisovania textu
    d(); // prida nový riadok
    a.appendChild(r) // prida kurzor späť do terminálu
}
// funkcia pre postupné vypisovanie textu.
, l = t => new Promise((e => {
    let n = 0;
    const a = setInterval((() => {
        c(t[n++]), // vytvori nový element s textom a pridaj ho do terminálu
        n === t.length && (clearInterval(a),e())  // signalizuj dokončenie vypisovania
    }), 20) // rýchlosť vypisovania
}))
// funkcia na pridanie textu do terminálu.
, c = t => {
    const e = document.createElement("span");
    e.textContent = t,
    a.appendChild(e),
    a.appendChild(r),
    a.scrollTop = a.scrollHeight  // posuň terminál na koniec, aby bol viditeľný nový
}
// funkcia na pridanie nového riadku do terminálu.
, d = () => {
    a.appendChild(document.createElement("br"))
}
// regex pre kontrolu, či stlačená klávesa je alfanumerický znak alebo medzera.
, _ = /^[\w\d ]$/
// funkcia, ktorá vracia Promise pre získanie vstupu od používateľa.
, p = () => new Promise((t => {
    let s = "";
    const i = o => {
        const l = o.key;
        _.test(l) ? (s += l,
        c(l)) : l === e && s.length > 0 ? (document.removeEventListener("keydown", i),
        d(),
        t(s)) : l === n && s.length > 0 && (o.preventDefault(),
        s = s.slice(0, s.length - 1),
        (() => {
            a.removeChild(r);
            const t = a.lastChild;
            t && a.removeChild(t),
            a.appendChild(r)
        })())
    };
    l("$ "), // vypíše prompt
    document.addEventListener("keydown", i)
}))
// zoznam možných chýb pre výber textových úloh.
, u = [
    ["stačí zadať", " "],
    ["len", "tentoraz to myslím vážne."],
    ["len", "posledne varovanie!"]
]
// funkcia na výber textovej úlohy z daného zoznamu.
, m = async t => {
    await o([...t.map(((t,e) => `${e + 1}. ${t.label}`)), " "]);
    let e = 0
    , n = -1;
    for (; -1 === n; ) {
        const a = parseInt(await p());
        if (a > 0 && a <= t.length)
            n = a - 1;
        else {
            const n = u[ e++ ];
            e %= u.length,
            await o([" ", `${n[0]} číslo medzi 1 a ${t.length}.`, n[1], " "])
        }
    }
    return t[n]
}
// funkcia na vyčistenie obsahu terminálu.
, f = () => {
    a.innerHTML = ""
}
// nastavenie elementov DOM a konštánt.
, h = document.getElementById("editor")
, g = document.getElementById("stats")
, y = 30e3 // časový limit na písanie úloh
, b = "cursor" // trieda pre kurzor
, v = "next" // trieda pre nasledujúci znak
, E = "wrong" // trieda pre chybný znak
, C = /\s/ // regex pre prázdne znaky
// funkcia na inicializáciu editora s textovou úlohou.
, S = t => {
    h.innerHTML = "";
    let e = 0;
    for (const n of t) {
        for (const t of n) {
            const n = document.createElement("span");
            n.innerText = t,
            e > 0 && n.classList.add("next"),
            C.test(t) && n.setAttribute("data-whitespace", "true"),
            h.appendChild(n),
            e++
        }
        h.appendChild(document.createElement("br"))
    }
    const n = h.firstChild;
    return n.classList.add(b),
    n
}
// funkcia na aktualizáciu štatistík počas písania.
, k = t => {
    const e = ((y - t.totalTime) / 1e3).toFixed(0);
    g.innerHTML = ["", s, `zostávajúci čas: ${e} s`, `napísané znaky: ${t.totalCharacters}`, "chyby: " + (t.totalCharacters - t.correctCharacters)].join("<br/>")
}
// funkcia pre kontrolu priebehu písania textu a zberu štatistík.
, R = t => (t = (t => t.trim().replace(/\t/g, " "))(t),
new Promise((async a => {
    const r = t.split(/[ \t]*\r?\n/).filter((t => t.trim().length > 0)).map((t => t + " "));
    let s = 0  // indexy pre riadky a znaky v texte
        , i = 0
        , o = 0
        , l = 0
        , c = 0
        , d = r.slice(s, 3) // začiatočné riadky
        , _ = d[o] // začiatočný riadok
        , p = S(d) // začiatočný prvok v editore
        , u = 0  // časový údaj pre meranie
        , m = 0  // interval na sledovanie času
        , f = 0 // interval na sledovanie štatistík
        , h = []; // pole pre uchovávanie chýb
    const g = t => {
        p.classList.remove(b),
        t || p.classList.add(E),
        p = p.nextElementSibling,
        p.classList.remove(v),
        p.classList.add(b),
        i++
    }
    , R = () => {
        for (; i + 0 < _.length - 1 && C.test(_[i + 0]); )
        g(!0)
    }
    , w = () => {
        const t = (new Date).valueOf() -u;
        return {
            correctCharacters: c,
            totalCharacters: l,
            totalTime: t,
            reachedTheEnd: t <= y
        }
    }
    , x = () => {
        document.removeEventListener("keydown", T),
        clearTimeout(m),
        clearInterval(f),
        a(w())
    }
    , L = t => {
        if (1 === t.length && i < _.length -1) {
            0 === u && (u = (new Date).valueOf(),
            m = setInterval(x, y),
            f = setInterval((() => k(w())), 1e3));
            const e = t === _[i];
            g(e),
            c += e ? 1 : 0,
            l++,
            i === _.length - 1 && o === d.length - 1 && (s < r.length - 1 ? (s += d.length,
                d = r.slice(s, s + 3),
                o = 0,
                i = 0,
                _ = d[o],
                p = S(d),
                R()) : x())
        } else
            i > 0 && t === n ? (p.classList.remove(b),
            p.classList.add(v),
            p = p.previousElementSibling,
            p.classList.remove(E),
            p.classList.add(b),
            i--,
            h[i] && c--,
            h = h.slice(0, -1)) : i === _.length - 1 && t === e && (l++,
            c++,
            o < d.length - 1 && (_ = d[++o],
            i = 0,
            h = [],
            p.classList.remove(b),
            p = p.nextElementSibling?.nextElementSibling,
            p.classList.remove(v),
            p.classList.add(b),
            R()));
        k(w())
    }
    , T = t => {
        const e = t.key;
        "Tab" === e ? (L(" "),
        L(" "),
        t.preventDefault(),
        t.stopPropagation()) : L(e)
    };
    document.addEventListener("keydown", T)
}
)))
// funkcia na zobrazovanie vítacích správ na základe stavu hry.
, w = (t,e) => 1 === t ? "vitajte toto je key-quest :)" : e ? "lets go ! poďme ešte raz :)" : "tak nič :(, nechám ťa aj tak hrať! :)"
// funkcia na začiatok hry s daným jazykom a úlohou.
, x = async(t,e) => {
    f(), // vyčistenie editora
    await o([`${t.label} pome nato!`, "keď budete pripravení, začnite písať!", s, " "])
}
// funkcia na zobrazenie výsledkov hry.
, L = async t => {
    const e = t.totalCharacters - t.correctCharacters
    , n = t.totalCharacters > 0 ? t.correctCharacters / t.totalCharacters * 100 : 0
    , a = t.correctCharacters / t.totalTime * 6e4;
    await o([t.reachedTheEnd ? "wow, dokončili ste celý code!" : "čas vypršal!", "tu sú vaše výsledky:", s, " ", `správne znaky za minútu: ${a.toFixed(2)}`, "celkovo chyb: " + (e > 0 ? e : "žiadne chyby, w"), `presnosť: ${n.toFixed(2)}%`, " ", s, "chceťe hrať znova? (y, n)", " "])
};
// hlavná asynchrónna funkcia hry.
(async() => {
    let e = 1  // počiatočný stav hry
    , n = !0; // indikátor reštartovania hry
    for (; ; ) {
        f(),  // vyčistenie editora
        await o([w(e, n), "prosim vyberte si jazyk na precvičenie: ", " "]);  // zobrazenie vstupnej správy
        const a = await m(t) // výber jazyka a úlohy
          , r = a.files[Math.floor(Math.random() * a.files.length)];  // náhodný výber úlohy
        await x(a, r),  // začiatok úlohy
        i(); // odstránenie kurzora
        const s = await R(r.code);  // spustenie hry a sledovanie písania
        h.innerHTML = "", // vyčistenie editora
        g.innerHTML = "", // vyčistenie štatistík
        f(), // vyčistenie editora
        await L(s),  // zobrazenie výsledkov hry
        n = "y" === await p(),  // reštart hry na základe vstupu hráča
        e++
    }
})
();