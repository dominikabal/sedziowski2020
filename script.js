$("#quiz1").dlxQuiz({
    quizData: {
        questions: [
            {
                q:
                    'Zgodnie z Konstytucją RP, kontrolę nad działalnością Rady Ministrów w zakresie określonym przepisami Konstytucji i ustaw sprawuje:',
                a: "Sejm",
                options: [
                    "Sejm",
                    "Senat",
                    "Prezydent Rzeczpospolitej"
                ]
            },

        {
            q:'Zgodnie z Konstytucją RP, w przypadkach określonych w Konstytucji skrócenie kadencji Sejmu moze zarządzić:',
            a:"Prezydent Rzeczpospolitej",
            options: ["Prezydent Rzeczpospolitej","Marszałek Sejmu","Sąd Najwyszy"]
        },

      {
          q:'Zgodnie z Konstytucją RP, organizację wewnętrzną i porządek prac Sejmu okresla regulamin Sejmu uchwalony przez:',
          a:"Sejm",
          options: ["Sejm","Senat","Zgromadzenie Narodowe"]
      },   
      {
          q:'Zgodnie z Konstytucją RP, bieg przedawnienia w stosunku do przestepstw nie ściganych z przyczyn politycznych popełnionych przez funkcjonariuszy publicznych lub na ich zlecenie:',
          a:"ulega zawieszeniu do czasu ustania tych przyczyn",
          options: ["ulega zawieszeniu do czasu ustania tych przyczyn","nie ulega zawieszeniu","ulega zawieszeniu do czasu wniesienia aktu oskarzenia do sądu"]
      },
      {
          q:'Zgodnie z ustawą o organizacji i trybie postępowania przed Trybunałem Konstytucyjnym, Wiceprezesa Trybunału Konstytucyjnegi powołuje',
          a:"Prezydent RP",
          options:["Prezydent RP","Marszałek Sejmu","Prezes Trybunału Konstytucyjnego"]
      },                                             {
         q:'Zgodnie z ustawą o Trybunale Stanu, prawo do pociągnięcia Prezesa Najwyzszej Izby Kontroli do odpowiedzialnosci przed Trybunałem Stanu przysługuje wyłącznie:',
         a:"Sejmowi",
         options: ["Sejmowi","Senatowi","Prezydentowi RP"]
      },                                              {
          q:'Zgodnie z ustawą - Prawo o ustroju sądów wojskowych, zwierzchni nadzór nad sądami wojskowymi w zakresie organizacji i działaności administracyjnej sprawuje:',
          a:"Minister Sprawiedliwości",
          options:["Minister Sprawiedliwości","Minister obrony Narodowej","Sąd Najwyzszy"]
      }  ,                                                
      {
        q:'Zgodnie z ustawą - Prawo o ustroju sądów powszechnych, prezesa sądu dyscyplinarnego przy sądzie apelacyjnym powołuje spośród sędziów tego sądu dyscyplinarnego:',
        a:"Prezes Sądu Najwyzszego kierujący pracą Izby Dyscyplinarnej",
        options:["Minister Sprawiedliwości","Pierwszy Prezes Sądu Najwyzszego","Prezes Sądu Najwyzszego kierujący pracą Izby Dyscyplinarnej"]
      },
      {
      q:'Zgodnie z ustawą - Prawo o ustroju sądów powszechnych, Minister Sprawiedliwości tworzy i znosi ośrodki zamiejscowe sądów w drodze:',
      a:"zarządzenia",
      options:["rozporządzenia","zarządzenia","decyzji administracyjnej"]
      }
      ,

    {
     q:'Zgodnie z ustawą - Prawo o ustroju sądów powszechnych, karą dyscyplinarną jest:',
     a:"upomnienie",
     options:["podanie wyroku do publicznej wiadomości","upomnienie","przeniesienie w stan spoczynku"]
    }, 

    {
        q:'Zgodnie z ustawą - Prawo o prokuraturze, kolegium prokuratury okręgowej:',
        a:"wyraza opinię o kandydatach na prokuratorów prokuratur rejonowych",
        options:["wyraza opinię o kandydatach na prokuratorów prokuratury okręgowej","wyraza opinię o kandydatach na prokuratorów prokuratur rejonowych","wybiera delegatów do zgromadzenia prokuratorów w prokuratorze regionalnej"]
    },
     {
      q:'Zgodnie z ustawą - Prawo o prokuraturze, przełozonym dyscyplinarnym jest:',
      a:"prokurator regionalny w stosunku do prokuratorów prokuratury regionalnej, prokuratorów prokuratur okręgowych i prokuratur rejonowych na obszarze działania prokuratury regionalnej",
      options:["Prokurator Krajowy w stosunku do prokuratorów powszechnych jednostek organizacyjnych prokuratury","prokurator regionalny w stosunku do prokuratorów prokuratury regionalnej, prokuratorów prokuratur okręgowych i prokuratur rejonowych na obszarze działania prokuratury regionalnej","prokurator rejonowy w stosunku do prokuratorów prokuratury rejonowej"]
     },
     {
    q:'Zgodnie z ustawą - Prawo o prokuraturze, w sprawach, w których było prowadzone dochodzenie, asesor prokuratury nieposiadający urpawnień do wykonywania czynności prokuratorskich:',
    a:"moze występować w charakterze oskarzyciela publicznego",
    options:["nie moze występować w charakterze oskarzyciela publicznego","moze występować w charakterze oskarzyciela publicznego","moze wsytępować w charakterze oskarzyciela publicznego w postępowaniu w pierwszej instancji pod warunkiem wydania pisemnego polecenia w tym zakresie przez prokuratora bezpośrednio przełozonego"]
     },
    {
    q:'Zgodnie z Kodeksem cywilnym, bieg przedawnienia roszczeń o zaniechanie rozpoczyna się od dnia:',
    a:"w którym ten, przeciwko komu roszczenie przysługuje, nie zastosował się do treści roszczenia",
    options:["zawarcia umowy, z której roszczenie wynika","w którym ten, komu roszczenie przysługuje, zaządał zaniechania naruszeń","w którym ten, przeciwko komu roszczenie przysługuje, nie zastosował się do treści roszczenia"]    
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, przynaleznościami są:',
    a:"tylko rzeczy ruchome potrzebne do korzystania z innej rzeczy (rzeczy głównej) zgodnie z jej przeznaczeniem i pozostające z nią w faktycznym związku odpowiadającym temu celowi, nalezące do właściciela rzeczy głownej",
    options:["tylko rzeczy ruchome potrzebne do korzystania z innej rzeczy (rzeczy głównej) zgodnie z jej przeznaczeniem i pozostające z nią w faktycznym związku odpowiadającym temu celowi, nalezące do właściciela rzeczy głownej","rzeczy ruchome lub nieruchome potrzebne od korzystania z innej rzeczy (rzeczy głównej) i pozostające z nią w faktycznym związku odpowiadającym temu celowi, nalezące do właściciela rzeczy głównej","tylko rzeczy ruchome potrzebne do korzystania z innej rzeczy (rzeczy głównej) zgodnie z jej przeznaczeniem i pozostające z nią w faktycznym związku odpowiadającym temu celowi, nienalezące do właściciela rzeczy głownej"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, jezeli początkiem terminu oznaczonego w dniach jest pewne zdarzenie, przy obliczaniu terminu:',
    a:"nie uwzględnia się dnia, w którym to zdarzenie nastąpiło",
    options:["uwzględnia się dzień, w którym to zdarzenie nastąpiło","nie uwzględnia się dnia, w którym to zdarzenie nastąpiło","uwzględnia się dzień, w którym to zdarzenie nastąpiło, chyba ze jest to dzień ustawowo wolny od pracy"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, odpowiedzialność nabywcy przedsiebiorstwa za zobowiązania zbywcy związane z prowadzeniem przedsiebiorstwa ogranicza się do wartości nabytego przedsiębiorstwa według stanu w chwili:',
    a:"nabycia, a według cen w chwili zaspokojenia wierzyciela",
    options:["powstania zobowiązania, a według cen w chwili nabycia","nabycia, a według cen w chwili zaspokojenia wierzyciela","zaspokojenia wierzyciela, a wesług cen w chwili nabycia"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, korzenie przechodzące z sąsiedniego gruntu właściciel gruntu moze:',
    a:'obciąć i zachować dla siebie',
    options:["obciąć i zachować dla siebie","obciąć tylko wtedy, gdy grunt sąsiedni jest przeznaczony na uzytek publiczny","obciąć wyłącznie wtedy, gdy zagrazają one uprawom na jego gruncie"]    
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, po wygaśnięciu uzytkowania obejmującego rzeczy oznaczone tylko co do gatunku, uzytkownik obowiązany jest do zwrotu według przepisów o:',
    a:"zwrocie pozyczki",
    options:["bezpodstawnym wzbogaceniu","zwrocie rzeczy uzyczonej","zwrocie pozyczki"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, jezeli właściciel poczynił nakłady na rzecz obcioązoną uzytkowaniem, a umowa stron nie stanowi inaczej, właściciel moze od uzytkownika ządać:',
    a:"zwrotu tych nakładów według przepisów o prowadzeniu cudzych spraw bez zlecenia",
    options:["zwrotu jedynie nakładów koniecznych","zwrotu tych nakładów według przepisów o bezpodstawnym wzbogaceniu","zwrotu tych nakładów według przepisów o prowadzeniu cudzych spraw bez zlecenia"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, domniemywa się, ze ten, kto rzeczą faktycznie włada, jest:',
    a:"posiadaczem samoistnym",
    options:["posiadaczem samoistnym","posiadaczem zaleznym","dzierzycielem"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, gdy dłuznik mający względem tego samego wierzyciela kilka długów tego samego rodzaju, wskazał przy spełnieniu świadczenia, który dług chce zaspokoić, jezeli umowa stron nie stanowi inaczej, wierzyciel:',
    a:"jest związany oświadczeniem dłuznika i nie moze zaliczyć otrzmanego świadczenia na poczet innych długów",
    options:["nie jest związany oświadczeniem dłuznika i moze zaliczyc otrzymane świadczenie na dowolny dług wymagalny","nie jest związany oświadczeniem dłuznika i moze zaliczyc otrzymane świadczenie na dług najdawniej wymagalny","jest związany oświadczeniem dłuznika i nie moze zaliczyć otrzmanego świadczenia na poczet innych długów"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, zwolnienie dłuznika z długu przez jednego z wierzycieli uprawnionych do świadczenia niepodzielnego:',
    a:"nie ma skutku względem innych wierzycieli",
    options:["ma skutek względem pozostałych wierzycieli","ma skutek względem pozostałych ierzycieli, chyba ze choćby jeden z nich zgłosi sprzeciw","nie ma skutku względem innych wierzycieli"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, spadkobierca nabywa spadek z chwilą:',
    a:"otwarcia spadku",
    options:["otwarcia spadku","złozenia oświadczenia o przyjęciu spadku","uprawomocnienia się postanowienia o stwierdzeniu nabycia spadku"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, spadkobierca moze zostać uznany za niegodnego dziedziczenia, jezeli:',
    a:"podstępem nakłonił spadkodawcę do sporządzenia testamentu",
    options:["uporczywie nie dopełniał względem osoby najblizszej spadkodawcy obowiązków rodzinnych","podstępem nakłonił spadkodawcę do sporządzenia testamentu","przez niedbalstwo zniszczył własnoręczny testament sporządzony przez spadkodawcę"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, dziedziczyć na podstawie ustawy moga równocześnie:',
    a:"siostrzenica spadkodawcy i ojciec spadkodawcy",
    options:["syn spadkodawcy i matka spadkodawcy","małzonek spadkodawcy i stryj spadkodawcy","siostrzenica spadkodawcy i ojciec spadkodawcy"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, po otwarciu spadku spadkobierca, który nie chce być spadkobiercą, powinien w tym celu:',
    a:"złozyć w terminie 6 miesięcy od dnia, w ktorym dowiedział się o tytule swego powołania, oświadczenie o odrzuceniu spadku",
    options:["złozyć w terminie 6 miesięcy od dnia, w ktorym dowiedział się o tytule swego powołania, oświadczenie o odrzuceniu spadku","padek na rzecz osoby trzeciej","zawrzeć ze spadkobiercami dziedziczącymi w dalszej kolejności umowę zrzeczenie się dziedziczenia"]
    },
    {
    q:'Zgodnie z Kodeksem cywilnym, w braku odmiennych dyspozycji spadkodawcy wzajemny obowiązek zaliczenia darowizny otrzymanej od spadkodawcy na schedę spadkową istnieje między:',
    a:"zstępnymi albo między zstępnymi i małzonkiem, dziedziczącymi z ustawy",
    options:["zstępnymi albo między zstępnymi i małzonkiem, dziedziczącymi z ustawy","małzonkiem i rodzicami spadkodawcy dziedziczącymi z ustawy","zstępnymi albo między zstępnymi i małzonkiem, dziedziczącymi na podstawie testamentu"]
    },
    {
    q:'Zgodenie z Kodeksem postępowania cywilnego, jezeli przepis szczególny nie stanowi inaczej, zazalenie nie przysługuje do sądu drugiej instancji na postanowienie sądu pierwszej instancji, którego przedmiotem jest',
    a:"oddalenie wniosku o wyłączenie sędziego",
    options:["zwrot pisma wniesionego jako pozew, z którego nie wynika ządanie rozpozniania sprawy","oddalenie wniosku o wyłączenie sędziego","przekazanie sprawy sądowi równorzędnemu lub nizszemu"]    
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, do zarządzenia asystenta sędziego o wezwaniu do uiszczenia opłaty sądowej strona moze wnieść:',
    a:"zastrzezenie",
    options:["sprzeciw","zastrzezenie","zarzuty"]    
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, świadkami mogą być:', 
    a:"osoby skazane wyrokiem prawomocnym za fałszywe zeznania",
    options:["przedstawiciele ustawowi strony","współucestnicy jednolici","osoby skazane wyrokiem prawomocnym za fałszywe zeznania"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, w sprawach gospodarczych rozpoznawanych w procesie w postępowaniu odrębnym postepowanie nie moze być zawieszone:',
    a:"w razie niestawiennictwa powoda na rozprawę, gdy powód nie ządał rozpozniania sprawy w jego nieobecności, a pozwany nie zgłosił wniosku o rozpoznanie sprawy",
    options:["jezeli rozstrzygnięcie sprawy zalezy od wyniku innego postępowania cywilnego","jezeli osoba trzecia wsytąpiła przeciwko obu stronom z interwencją główną","w razie niestawiennictwa powoda na rozprawę, gdy powód nie ządał rozpozniania sprawy w jego nieobecności, a pozwany nie zgłosił wniosku o rozpoznanie sprawy"]
    },
    {
     q:'Zgodnie z Kodeksem postępowania cywilnego, w razie oddalenie wniosku o ustanowienie adwokata lub radcy prawnego ponowny wniosek o ustanowienie adwokata lub racy prawnego oparty na tych samych okolicznościach, które stanowiły uzasadnienie oddalonego wniosku:',
     a:"pozostawia się w aktach sprawy bez zadnych dalszych czynności",
     options:["sąd odrzuca","przewodniczący zwraca","pozostawia się w aktach sprawy bez zadnych dalszych czynności"]  
    },
    {
    q:'Zgodnie z Kodeksem postepowania cywilnego, sąd moze bez wniosku ustanowić adowkata lub radcę prawnego z urzędu:',
    a:"",
    options:["w postępowaniu o ubezwłasnowolnienie dla osoby, której dotyczy wniosek o ubezwłasnowolnienie, jezeli osoba ta ze względu na stan zdrowia psychicznego nie  jest zdolna do złozenia wniosku, a sąd uzna udział adwokata ub radcy prawnego w sprawie za potrzebny","w kazdej sprawie nieprocesowej, w której postępowanie moze zostać wszczęte z urzędu","w postępowaniu o stwierdzenie nabycia spadku dla małoletniego spadkobiercy testamentowego, w sytuacji gdy przedstawiciel ustawowy tego małoletniego spadkobiercy nalezy do kręgu spadkobierców ustawowych"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, skarga kasacyjna przysługuje od wydanego przez sąd drugiej instancji postanowienia co do istoty sprawy w sprawie:',
    a:"o zniesienie współwłasności, w której wartość przedmiotu zaskarzenia wynosi dwieście tysięcy złotych",
    options:["o ustanowienie kuratora spadku","o zniesienie współwłasności, w której wartość przedmiotu zaskarzenia wynosi dwieście tysięcy złotych","o podział majątku wspólnego po ustawniu wspólności majątkowej między małzonkami,w której wartość przedmiotu zaskarzenia wynosi sto tysięcy złotych"]
    },
    {
    q:'Zgodnie z Kodeksem postępowana cywilnego, sprawy o ubezwłasnowolnienie sąd pierwszej instancji rozpoznaje w składzie:',
    a:"trzech sędziów",
    options:["trzech sędziów","jednego sędziego","jednego sędziego i dwóch ławników"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania cywilnego, uprawnionym do złozenia wniosku o ubezwłasnowolnienie małoletniego pozostającego pod władzą rodzicielską, który ukończył 13 lat, jest:',
    a:"rodzic małoletniego",
    options:["dziadek małoletniego","stryj małoletniego","rodzic małoletniego"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, w razie śmierci małzonka w toku sprawy o separację orzekaną na zgodny wniosek małzonków postępowanie:', 
    a:"umarza się",
    options:["umarza się","podelga zawieszeniu i jest kontynuowane po podjęciu z udziłem kuratora ustanowionego przez sąd orzekający","podelga zawiezeniu i jest kontunuowane po podjęciu z udziałem spadkobierców zmarłego małzonka"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania cywilnego, wszczęcie postępowania w sprawie o przysposobienie następuje:',
    a:"na wniosek przysposabiającego",
    options:["z urzędu","na wniosek przysposabiającego","na wniosek rodziców osoby mjącej być przysposobioną"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania cywilnego, sądem właściwym do rozpoznania w pierwszej instancji sprawy o stwierdzenie zasiedzenia jest:',
    a:"sąd rejonowy bez względu na wartość przedmiotu sporu",
    options:["sąd rejonowy bez względu na wartość przedmiotu sporu","sąd okręgowy, gdy wartość przedmiotu sporu przewyzsza 75.000 złotych, a sąd rejonowy gdy wartość przedmiotu sporu nie przekracza 75.000 złotych","sąd okręgowy bez względu na wartość przedmiotu sporu"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, od postanowienia sądu pierwszej instancji w przedmiocie pozbawienia wspołwłaściciela uzywania rzeczy wspólnej poddanej zarządowi zarządcy ustawowemu przez sąd:',
    a:"przysługuje zazalenie",
    options:["przysługuje apelacja","przysługuje zazalenie","nie przysługuje zaden środek odwoławczy"]    
    },
    {
    q:'Zgodnie z Kodeksem postępowania cywilnego, świadek testamentu ustnego wezwany do złozenia zeznań stwierdzającch treść tego testamtnu:',
    a:"nie moze odmówić zeznań ani odpowiedzi na pytanie",

options:["moze odmowić złozenia zeznań, gdy jest małzonkiem uczestnika postępowania","nie moze odmówić zeznań ani odpowiedzi na pytanie","moze odmowić odpowiedzi na zadane pytanie, jezeli zeznanie mogłoby narazi jego lub jego bliskich na dotkliwą i bezpośrednią szkodę majątkowa"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania cywilnego, zapewnienie spadkowe moze złozyc:',
    a:"zgłaszający się spadkobierca",
    options:["zgłaszający się spadkobierca","kazda osoba powołana na kuratora spadku","kazda osoba która posiada wiadomości o stosunkach rodzinnych i testamentach spoadkodawcy"]    
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, w razie niezłozenia przez małzonków w sprawie nazwiska uzywanego po zawarciu małzenstwa, przyjmuje się, ze:',  
    a:"kazdy z malzonków zachowuje swoje dotychczasowe nazwisko",
    options:["zona przyjmuje nazwisko męza","kazdy z malzonków zachowuje swoje dotychczasowe nazwisko","zona przyjmuje podwójne nazwisko - męza i swoje"]  
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, domniemania dotyczące pochodzenia dziecka z małzenstwa mogą być obalone na skutek:',
    a:"powództwa o zaprzeczenie ojcostwa",
    options:["powództwa o zaprzeczenie ojcostwa","powództwa o ustalenie ojcostwa","oświadczenie o uznaniu ojcostwa"]
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, w przypadku braku umowy majątkowej małzeńskiej do majątku osobistego małzonków nalezą:',
    a:"przedmioty majątkowe uzyskane z tytułu nagrody za osobiste osiągnięcia jednego z małzonków",
    options:["dochody z majątku osobistego kazdego z małzonków","przedmioty majątkowe uzyskane z tytułu nagrody za osobiste osiągnięcia jednego z małzonków","środki zgromadzone na rachunku pracowniczego funducu emerytalnego kazdego z małzonków"]    
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, wazność umowy, która została zawarta przez jednego z małzonków bez wymaganej zgody drugiego, zalezy od:',
    a:"potwierdzenia umowy przez drugiego małzonka",
    options:["zgodności umowy z dobrem rodziny","potwierdzenia umowy przez drugiego małzonka","tego, czy umowa nie narusza interesów drugiego małzonka"]
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, przesłanką orzeczenia przez sąd separacji jest:',
    a:"zupełny rozkład pozycia",
    options:["trwały rozkład pozycia","zupełny rozkład pozycia","odmowa dostarczania środków na utrzymanie rodziny"]
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, jezeli przepis szczególny nie stanowi inaczej, mąz matki moze wytoczyc powództwo o zaprzeczenie ojcostwa:',
    a:"w ciągu roku od dnia, w którym dowiedział się, ze dziecko do niego nie pochodzi",
    options:["w ciągu roku od dnia, w którym dowiedział się, ze dziecko do niego nie pochodzi","w ciągu dwóch lat od dnia, w którym dowiedział się, e dziecko od niego nie pochodzi","w ciągu pięciu lat od dnia, w którym dowiedział się, ze dziecko do niego nie pochodzi"]
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, przysposobienie następuje:',
    a:"przez orzeczenie sądu opiekuńczego",
    options:["na skutek jednostronnej czynności prawnej przysposabiającego","na skutek umowy o przysposobienie","przez orzeczenie sądu opiekuńczego"]    
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, jezeli rozwodu ząda małzonek wyłącznie winny rozkładu pozycia, rozwód:',
    a:"nie jest dopuszczalny, chyba ze drugi małzonek wyrazi zgodę na rozwód albo ze odmowa jego zgody na rozwód jest w danych okolicznościach sprzeczna z zasadami współzycia społecznego",
    options:["nigdy nie jest dopuszczalny","nie jest dopuszczalny, chyba ze drugi małzonek wyrazi zgodę na rozwód albo ze odmowa jego zgody na rozwód jest w danych okolicznościach sprzeczna z zasadami współzycia społecznego","jest dopuszczalny w kazdym przypadku"]
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, obowiązek dostarczania środków utrzymania małzonkowi rozwiedzionemu wygasa w razie:',
    a:"zawarcia przez uprawnionego do alimentów nowego małzeństwa",
    options:["zawarcia przez zobowiązanego nowego małzenstwa","zawarcia przez uprawnionego do alimentów nowego małzeństwa","popadnięcia zobowiązanego w niedostatek"]    
    },
    {
    q:'Zgodnie z Kodeksem rodzinnym i opiekuńczym, jezeli przepis szczególny nie stanowi inaczej, do przysposobienia potrzebna jest zgoda przysposabianego, który ukończył:',
    a:"trzynaście",
    options:["dziewięć","jedenaście","trzynaście"] 
    },
    {
    q:'Zgodnie z Kodeksem pracy, do okresu pracy, od którego zalezy wymiar urlopu, wlicza się z tytułu ukończenia szkoły policealnej:',
    a:"6 lat",
    options:["9 lat","7 lat","6 lat"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, rozwiązanie umowy o pracę bez wypowiedzenia z winy pracownika nie moze nastąpić po upływie:',
    a:"1 miesiąca od uzyskania przez pracodawcę wiadomości o zaistnieniu okoliczności uzasadniającej rozwiązanie umowy",
    options:["1 miesiąca od uzyskania przez pracodawcę wiadomości o zaistnieniu okoliczności uzasadniającej rozwiązanie umowy","21 dni od uzyskania przez pracodawcę wiadomości o zaistnieniu okoliczności uzasadniającej rozwiązanie umowy","14 dni od uzyskania przez pracodawcę wiadomości o zaistneiniu okoliczności uzasadniającej rozwiązanie umowy"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, w przypadku urodzenia jednego dziecka przy jednym porodzie pracownicy przysługuje urlop macierzyński w wymiarze:',
    a:"20 tygodni",
    options:["35 tygodni","33 tygodni","20 tygodni"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, pracodawca będący jednostką organizacyjną:',
    a:"nie musi posiadać osobowości prawnej",
    options:["nie musi posiadać osobowości prawnej","musi posiadać osobowiść prawną","moze nie posiadać osobowości prawnej, alr tylko wtedy, gdy jest wpisany do odpowiedniego rejestru"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, okres wypowiedzenia umowy o pracę zawartej na czas nieokreślony, jezeli pracownik był zatrudniony przez 6 miesięcy, wynosi:',
    a:"1 miesiąc",
    options:["1 miesiąc","2 miesiące","3 miesiące"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, w okresie trzymiesięcznego wypowiedzenia umowy o pracę dokonanego przez pracodawcę pracownikowi przysługuje zwolnienie na poszukiwanie pracy w wymiarze:',
    a:"7 dni roboczych",
    options:["7 dni roboczych","5 dni roboczych","3 dni roboczych"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, w razie podjęcia pracy w wyniku przywrócenia do pracy pracownicy, z której rozwiązano umowę o pracę w czasie urlopu macierzyńskiego, przysługuje wynagrodzenie:',
    a:"za cały czas pozostawania bez pracy ",
    options:["za cały czas pozostawania bez pracy","za cały czas poszostawania bez pracy nie słuzszy niz 1 miesiąc","za czas pozostawania bez pracy nie słuzszy niz 2 miesiące"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, w razie śmierci pracownika w czasie trwania stosunku pracy, jezeli był zatrudniony krócej niz 10 lat, rodzinie przysługuje od pracodawcy odprawa pośmiertna w wysokości:',
    a:"jednomiesięcznego wynagrodzenia",
    options:["jednomiesięcznego wynagrodzenia","trzymiesięcznego wynagrodzenia","sześciomiesięcznego wynagrodzenia"]    
    },
    {
    q:'Zgodnie z Kodeksem pracy, pracownikowi podnoszącemu swoje kwalifikacje zawodowe, który przystępuje do egzaminu eksternistycznego, przysługuje urlop szkoleniowy w wymiarze:',
    a:"6 dni",
    options:["21 dni","10 dni","6 dni"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, za pracę w godzinach nadliczbowych przypadających w nocy, oprócz normalnego wynagrodzenia, pracownikowi przysługuje dodatek w wysokości:',
    a:"100% wynagrodzenia",
    options:["50% wynagrodzenia","80% wynagrodzenia","100% wynagrodzenia"]
    },
    {
    q:'Zgodenie z Kodeksem pracy, w godzinach nadliczbowych ani w porze nocnej nie wolno zatrudniać:',
    a:"pracownicy w ciązy",
    options:["pracownicy w ciązy","pracownicy opiekującej się dzieckiem po ukończeniu przez nie 5 roku zycia","pracownicy, której zostały 4 lata do uzyskania świadczeń emerytalnych"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, urlop rodzicielski jest udzielany jednorazowo albo w częściach nie ponieźniej niz do zakończenia roku kalendarzowego, w którym dziecko kończy:',
    a:"6 rok zycia",
    options:["8 rok zycia","7 rok zycia","6 rok zycia"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, prawo do urlopu wychowawczego w celu sprawowania osobistej opieki nad dzieckiem ma pracownik zatrudniony przez okres co najmniej:',
    a:"6 miesięcy",
    options:["6 miesięcy","5 miesięcy","3 miesięcy"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, układ zbiorowy zwiera się:',
    a:"w formie pisemnej na czas nieokreślony lub czas określony",
    options:["wyłącznie w formu aktu notarialnego","w formie ustnej wyłącznie na czas określony","w formie pisemnej na czas nieokreślony lub czas określony"]
    },
    {
    q:'Zgodnie z Kodeksem pracy, układem zbiorowym pracy mogą być objęci:',
    a:"emeryci i renciści",
    options:["sędziowie i prokuratorzy","emeryci i renciści","pracownicy samorządowi urzędu gminy zatrudnieni na podstawie powołania"]
    },
    {
    q:'Zgodnie z Kodeksem spółek handlowych, rada nadzorcza publicznej spółki akcyjnej składa się z co najmniej:',
    a:"z pięciu członków",
    options:["z dwóch członków","z trzech członków","z pięciu członków"]
    },
    {
    q:'Zgodnie z Kodeksem spółek handlowych, zarzad mozna powołać:',
    a:"w spółce partnerskiej",
    options:["w spółce jawnej","w spółce partnerskiej","w spółce komandytowej"]
    },
    {
    q:'Zgodnie z Kodeksem spółek handlowych, rozporządzenie udziałem albo akcją dokonane przed wpisem spółki kapitałowej do rejestru albo przed zarejestrowaniem podwyzszenia kapitału zakładowego:',
    a:"jest niewazne",
    options:["jest niewazne","jest wazne za zgodą pozostałych wspólników","jest wazne za zgodą sądu rejestrowego"]
    },
    {
    q:'zgodnie z Kodeksem spółek handlowych, likwidatorem moze być:',
    a:"tylko osoba fizyczna",
    options:["osoba fizyczna lub osoba prawna","tylko osoba prawna","tylko osoba fizyczna"]

    },
    {
    q:'Zgodnie z ustawą - Prawo przedsiębiorców, do cech działalności gospodarczej nalezy:',
    a:"zorganizowanie oraz ciągłość",
    options:["podporządkowanie poleceniom pracodawcy co do miejsca i czasu wykonywania działalności gospodarczej","zorganizowanie oraz ciągłość","zarządzanie majątkiem w celu zaspokojenia własnych potrzeb"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, nie stanowi przestępstwa czyn zabroniony, którego:',
    a:"społeczna szkodliwość czynu jest znikoma",
    options:["sprawca naprawił","społeczna szkodliwość czynu jest znikoma","sprawca ukończył w chwili czynu lat 17, a nie ukończył 18 roku zycia"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, odpowiedzialności karnej za przestępstwo skutkowe popełnione przez zaniechanie podlega ten tylko, na kim ciązył:',
    a:"prawny, szczególny obowiązek zapobiegnięcia skutkowi",
    options:["społeczny obowiązek zapobiegnięcia skutkowi","wyłącznie ustawowy obowiązek zapobiegnięcia skutkowi","prawny, szczególny obowiązek zapobiegnięcia skutkowi"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, kto przekracza granice obrony konecznej pod wpływem strachu lub wzburzenia usprawiedliwionych okolicznościami zamachu:',
    a:"nie podlega karze",
    options:["nie popełnia przestępstwa","nie podlega karze","nie popełnia czynu zabronionego"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, nie podlega karze współdziałający, który:',
    a:"dobrowolnie zapobiegł dokonaniu czynu zabronionego",
    options:["dobrowolnie starał się zapobiec dokonaniu czynu zabronionego","dobrowolnie zapobiegł dokonaniu czynu zabronionego","pojednał się z pokrzywdzonym"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, jezeli ustawa nie stanowi inaczej, kara ograniczenia wolności trwa najdłuzej:',
    a:"2 lata",
    options:["5 lat","4 lata","2 lata"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, jezeli sprawca, w stosunku do którego warunkowo umorzono postępowanie karne, w okresie próby uchyla się od dozoru, sąd:',
    a:"moze podjąć postępowanie karne",
    options:["podejmuje postępowanie karne","moze podjąć postępowanie karne","moze wznowic postępowanie karne"]
    },

    {
    q:'Zgodnie z Kodeksem karnym, wobec sprawcy występku o charakterze chuligańskim, sąd:',
    a:"moze warunkowo zawiesić wykonanie kary jedynie w szczególnie uzasadnionych wypadkach",
    options:["nie moze warunkowo zawiesić wykonywania kary","warunkowo zawiesza wykonanie kary, jezeli w czasie popelnenia przestepstwa sprawca nie ukończył 18 lat","moze warunkowo zawiesić wykonanie kary jedynie w szczególnie uzasadnionych wypadkach"] 
    },
    {
    q:'Zgodnie z Kodeksem karnym, sprawca, wobec którego orzeczono elektroniczną kontrolę miejsca pobytu:',
    a:"ma obowiązek poddania się nieprzerwanej kontroli miejsca swojego pobytu sprawowanej za pomocą urządzeń technicznych",
    options:["ma obowiązek poddania się nieprzerwanej kontroli miejsca swojego pobytu sprawowanej za pomocą urządzeń technicznych","nie ma obowiązku poddania się nieprzerwanej kontroli miejsca swojego pobytu sprawowanej za pomocą urządzeń technicznych","moze odmówić poddania się nieprzerwanej kontroli miejsca swojego pobytu sprawowanej za pomocą urządzeń technicznych"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, w wypadku objęcia wyrokiem łącznym kary, z której odbywania skazany został warunkowo zwolniony, na poczet orzeczonej kary łącznej zalicza się:',
    a:"jedynie okres faktycznego odbywania kary",
    options:["cały okres orzeczonej kary","jedynie okres pozostały do odbycia kary","jedynie okres faktycznego odbywania kary"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, jezeli suma orzeczonych kar pozbawiania wolności wynosi 25 lat, a chociazby jedna z podlegających łączeniu kar wynosi nie mniej niz 10 lat, sąd:',
    a:"moze orzec karę łączną 25 lat pozbawienia wolności",
    options:["orzeka karę łączną 25 lat pozbawienia wolności","moze orzec karę łączną 25 lat pozbawienia wolności","moze orzec karę łączną dozywotniego pozbawienia wolności"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, zamiana kary pozbawienia wolności z warunkowym zawieszeniem jej wykonania na grzywnę:',
    a:"nie zwalnia skazanego od wykonania orzeczonych wobec niego środków karnych",
    options:["nie zwalnia skazanego od wykonania orzeczonych wobec niego środków karnych","zwalnia skazanego od wykonania orzeczonych wobec niego środków karnych","moze zwolnić skazanego od wykonania orzeczonych wobec niego środków karnych"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, w wypadku zbiegu dwóch lub więcej kar 25 lat pozbawienia wolności, sąd:',
    a:"moze orzec jako karę łączną karę dozywotniego pozbawienia wolności",
    options:["moze orzec jako karę łączną karę dozywotniego pozbawienia wolności","orzeka jako karę łączną dozywotniego pozbawienia wolności","orzeka jako karę łączną karę 25 lat pozbawienia wolności"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, jezeli zachowanie sprawcy po uchyleniu środka zabezpieczającego wskazuje, ze zachodzi konieczność stosowania środków zabezpieczających, sąd, nie później niz w ciągu 3 lat od uchylenia środka:',
    a:"moze orzec ponownie ten sam środek zabezpieczający",
    options:["orzeka ponownie ten sam środek zabezpieczający","moze orzec ponownie ten sam środek zabezpieczający","nie moze orzec ponownie tego samego środka zabezpieczającego"]
    },
    {
    q:'Zgdodnie z Kodeksem karnym, jezeli sprawowanie dozoru jest znacznie utrudnione z przyczyn niezawinionych przez skazanego:',
    a:"moze nastąpić zwolnienie od dozoru",
    options:["następuje zwolnienie od dozoru","moze nastąpić zawieszenie wykonania dozoru","moze nastąpić zwolnienie od dozoru"]
    },
    {
    q:'Zgodnie z Kodeksem karnym, w razie skazania za przestępstwo popełnione w związku z uzaleznieniem od alkoholu:',
    a:"mozna orzec wobec sprawcy środki zabezpieczające",
    options:["orzeka się wobec sprawcy środki zabezpieczające","mozna orzec wobec sprawcy środki zabezpieczające","nie moze orzec wobec sprawcy środków zabezpieczających"]

    },
    {
    q:'Zgodnie z Kodeksem karnym skarbowyn, wykroczenie skarbowe mozna popełnić:',
    a:"umyślnie, a takze nieumyślnie, jezeli kodeks tak stanowi",
    options:["wyłącznie umyślnie","nieumyślnie, a takze umyślnie, jezeli kodeks tak stanowi","umyślnie, a takze nieumyślnie, jezeli kodeks tak stanowi"]
    },
    {
    q:'Zgodnie z Kodeksem karnym skarbowyn, za usiłowanie mozna wymierzyć karę w wysokości:',
    a:"nieprzekraczającej dwóch trzecich górnej granicy ustawowego zagrozenia przewidzianego dla danego przestępstwa skarbowego",
    options:["nieprzekraczającej dwóch trzecich górnej granicy ustawowego zagrozenia przewidzianego dla danego przestępstwa skarbowego","powyzej dwóch trzecich górnej granicy ustawowego zagrozenia przewidzianego dla danego przestępstwa skarbowego","wyłącznie do połowy górnej granicy ustawowego zagrozenia przewidzianego dla danego przestepstwa skarbowego"]
    },
    {
    q:'Zgodnie z Kodeksem karnym skarbowym, kare pozbawienia wolności wymierza się:',
    a:"w dniach, miesiącach i latach",
    options:["tylko w miesiącach i latach","tylko w miesiącach","w dniach, miesiącach i latach"]
    },
    {
    q:'Zgodie z Kodeksem karnym skarbowym, gdy czyn stanowi przestępstwo skarbowe zagrozone karą grzywny, karalność tego przestępstwa ustaje, jezeli od czzasu jego popełnienia:',
    a:"upłynęło 5 lat",
    options:["upłynęły 2 lata","upłynęły 3 lata","upłynęło 5 lat"]
    },
    {
    q:'Zgodnie z Kodeksem karnym skarbowym, orzeczenie kary za wykroczenie skarbowe uwaza się za niebyłe z upływem:',
    a:"2 lat od wykonania kary, chyba ze kodeks stanowi inaczej",
    options:["2 lat od wykonania kary, chyba ze kodeks stanowi inaczej","3 lat od wydania prawomocnego orzeczenia","5 lat od popełnienia czynu zabronionego"]
    },
    {
    q:'Zgodnie z Kodeksem karnym skarbowyn, uwzględniając wniosek o udzielenie zezwolenia na dobrowolne poddanie się odpowiedzialności, sąd orzeka:',
    a:"wyrokiem na posiedzeniu",
    options:["wyrokiem na posiedzeniu","wyrokiem po przeprowadzeniu rozprawy","postanowieniem na posiedzeniu"]

    },
    {
    q:'Zgodnie z Kodeksem wykroczeń, kara aresztu trwa najkrócej:',
    a:"5 dni",
    options:["2 dni","3 dni","5 dni"]
    },
    {
    q:'Zgodnie z Kodeksem wykroczeń, wymierzając karę ograniczenia wolności, organ orzekający moze zobowiązać ukaranego do:',
    a:"przeproszenia pokrzywdzonego",
    options:["powstrzymania się od naduzywania alkoholu","przeproszenia pokrzywdzonego","poddania się terapi uzaleznień"]
    },
    {
    q:'Zgodnie z Kodeksem wykroczeń, nawiązka jest:',
    a:"środkiem karnym",
    options:["środkiem karnym","środkiem kompensacyjnym","środkiem oddziaływania wychowawczego"]
    },
    {
    q:'Zgodnie z Kodeksem wykroczeń, zakaz prowadzenia pojazdów obowiązuje od:',
    a:"uprawomocnienia się wyroku, w którym został orzeczony",
    options:["uprawomocnienia się wyroku, w którym został orzeczony","zwrotu dokumentu uprawniającego do prowadzenia pojazdu","zatrzymania dokumentu uprawniającego do prowadzenia pojazdu"] 
    },
    {
    q:'Zgodnie z Kodeksem wykroczeń, odpowiedzialność za podzeganie i pomocnictwo zachodzi wtedy, gdy:',
    a:"ustawa tak stanowi i tylko w razie dokonania przez sprawcę czynu zabronionego",
    options:["ustawa tak stanowi i tylko w razie dokonania przez sprawcę czynu zabronionego","ustawa tak stanowi, a sprawca usiłował dokonać czynu zabronionego","ustaea tak stanowi, a sprawca rozpoczął przygotowania do dokonania czynu zabronionego"]    
    },
    {
    q:'Zgodnie z Kodeksem postepowania karnego, na etapie postępowania przygotowawczego, jezeli w wyniku kontroli i utrwalania treści rozmów telefonicznych uzyskano dowód popełnienia przez osobę, wobec której kontrola była stosowana, innego przestępstawa ściganego z urzędu niz przestepstwo objęte zarządzeniem kontoli:',
    a:"prokurator podejmuje decyzję w przedmiocie wykorzystana tego dowodu w postępowaniu karnym",
    options:["dowód ten nie moze zostać wykorzystany","prokurator podejmuje decyzję w przedmiocie wykorzystana tego dowodu w postępowaniu karnym","sąd podejmuje decyzję w przedmiocie wykorzystania tego dowodu w postępowaniu karnym"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, w kwestii wznownienia postępowania zakończonego orzeczeniem sądu okręgowego orzeka:',
    a:"sąd apelacyjny w składzie trzech sędziów",
    options:["sąd apelacyjny w składzie jednego sędziego","sąd apelacyjny w składzie trzech sędziów","Sąd Najwyzszy w skladzie trzech sędziów"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, przewód sądowy rozpoczyna się od:',
    a:"zwięzłego przedstawienia zarzutów oskarzenia",
    options:["wywołania sprawy","doręczenia oskarzonemu aktu oskarzenia","zwięzłego przedstawienia zarzutów oskarzenia"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, jezeli prokurator nadrzędny nad prokuratorem, który wydał postanowienie w przedmiocie kosztów, nie przychyli się do wniesionego na to postanowienie zazalenia:',
    a:"kieruje zazalenie do sądu",
    options:["utrzymuje zaskarzone postanowienie w mocy","kieruje zazalenie do sądu","przekazuje sprawę na drogę postępowania cywilnego"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, skargę na wyrok sądu odwoławczego uchylający wyrok sądu pierwszej instancji i przekazujący sprawę do ponownego rozpoznania Sąd Najwyzszy rozpoznaje:', 
    a:"na posiedzeniu bez udziału stron",
    options:["na rozprawie","na posiedzeniu bez udziału stron","na rozprawie, a w wypadkach przewidzianych przez ustawę - na posiedzeniu, w którym mają prawo wziąć udział strony postępowania"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania karnego, po rozpoczęciu przewodu sądowego przed sądem pierwszej instancji cofnięcie przez oskarzyciela publicznego aktu oskarzenia:',
    a:"jest dopuszczalne jedynie za zgodą oskarzonego",
    options:["jest niedopuszczalne","jest dopuszczalne jedynie za zgodą oskarzonego","jest dopuszczalne jedynie za zgodą sądu"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, zgoda na uczestniczenie w postępowaniu mediacyjnym:',
    a:"moze zostać cofnięta az do zakończenia postępowania mediacyjnego",
    options:["moze zostać cofnięta az do zakończenia postępowania mediacyjnego","moze zostać cofnięta jedynie do czasu zakończenia spotkania wstępnego","nie moze zostać cofnięta przez osobę, z inicjatywy której została skierowana do postępowania mediacyjnego"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, o wyłączeniu prowadzącego lub nadzorującego postępowanie przygotowawcze orzeka:',
    a:"prokurator nadzorujący postępowanie lub bezpośrednio przełozony",
    options:["sąd rejonowy, w którego okręgu toczy się postępowanie","sąd powołany do rozpoznania sprawy w pierwszej instancji","prokurator nadzorujący postępowanie lub bezpośrednio przełozony"]
    },
    {
    q:'Zgodnie z Kodeksem postepowania karnego, w razie śmierci oskarzyciela prywatnego postępowanie:',
    a:"zawiesza się, a osoby najblizsze lub osoby pozostające na utrzymaniu zmarłego mogą wstępować w jego prawa",
    options:["niezwłocznie się umarza","zawiesza się, a osoby najblizsze lub osoby pozostające na utrzymaniu zmarłego mogą wstępować w jego prawa","toczy się dalej"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, podczas okazania osoba okazywana powinna znajdować się w grupie obejmującej:',
    a:"łącznie co najmniej cztery osoby",
    options:["łącznie nie wiecej niz trzy osoby","łącznie co najmniej cztery osoby","wyłącznie nieparzystą liczbę osób"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego, w postępowaniu przygotowawczym karę pienięzną na świadka, który bez nalezytego usprawiedliwienia nie stawił się na wezwanie prokuratora, nakłada:',
    a:"prokurator",
    options:["prokurator","sąd rejonowy, w którego okręgu prowadzi się postępowanie","sąd okręgowy, w którego okręgu prowadzi się postępowanie"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania karnego w sprawach o wykroczenia, w postępowaniu w sprawie o wykroczenia obwiniony musi mieć obrońcę przed sądem, jezeli:',
    a:"jest niewidomy",
    options:["nie ukończył lat 18","jest niewidomy","nie zna języka polskiego"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania w sprawach o wykroczenia, w wypadkach niecierpiących zwłoki, jezeli postanowienie o przeszukaniu nie mogło być uprzednio wydane, mozna przeprowadzić przeszukanie bez takiego postanowienia, jednak organ dokonujący tej czynności zobowiązany jest następnie zwrócić się niezwłocznie o zatwierdzenie przeszukania do:',
    a:"prokuratora",
    options:["prokuratora","sądu","prezesa właściwego sądu"]
    },

    {
    q:'Zgodnie z Kodeksem postępowania w sprawach o wykroczenia, w razie nieuiszczenia w wyznacoznym terminie grzywny nałozonej mandatem zaocznym, organ, którego funkcjonariusz nałozył grzywnę, wystepuje do:',
    a:"sądu z wnioskiem o ukaranie",
    options:["naczelnika urzędu skarbowego w celu poboru nalezności","komornika sądowego o przeprowadzenie egzekucji","sądu z wnioskiem o ukaranie"]

    },
    {
    q:'Zgodnie z Kodeksem postępowania w sprawach o wykroczenia, kasację wnosi sie do Sądu Najwyzszego:',
    a:"bezpośrednio",
    options:["bezpośrednio","za pośrednictwem sądu odwoławczego","za pośrednictwem sądu, który wydał zaskarzone orzeczenie"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania w sprawach o wykroczenia, rozprawę rozpoczyna:',
    a:"wywołanie sprawy",
    options:["odczytanie wniosku o ukaranie","wywołanie sprawy","sprawdzenie, czy wszyscy wezwani i zawiadomieni o terminie rozprawy stawili się"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, kontrola administracji publicznej przez sądy administracyjne nie obejmuje orzekania w sprawach skarg na:',
    a:"odwołania od uchwał organów samorządu sędziów sądów powszechnych",
    options:["akty nadzoru nad działalnością organów jednostek samorządu terytorialnego","akty prawa miejscowego organów jednostek samorządu terytorialnego i terenowych organów administracji rządowej","odwołania od uchwał organów samorządu sędziów sądów powszechnych"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, sądy administracyjne roztrzygają:',
    a:"spory o właściwość między organami jednostek samorządu terytorialnego i między samorządowymi kolegiami odwoławczymi, o ile odrębna ustawa nie stanowi inaczej",
    options:["spory kompetencyjne pomiędzy centralnymi konstytucyjnymi organami państwa","spory o właściwość między organami jednostek samorządu terytorialnego i między samorządowymi kolegiami odwoławczymi, o ile odrębna ustawa nie stanowi inaczej","spory o właściwość między sądami powszechnymi a sądami polubownymi"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, jezeli przepis szczególny nie stanowi inaczej,do rozpoznania sprawy właściwy jest wojewódzki sąd administracyjny, na którego obszarze właściwości:',
    a:"ma siedzibę organ administracji publicznej, którego działalność została zaskarzona",
    options:["ma siedzibę organ administracji publicznej, którego działalność została zaskarzona","ma miejsce zamieszkania lub siedzibę podmiot składający skargę","akt podlegający kontroli ma zostać wykonany lub podlega egzekucji"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, o wyłączeniu sędziego rozstrzyga:',
    a:"sąd administracyjny, w którym sprawa się toczy",
    options:["zawsze Naczelny Sąd Administracyjny","sąd administracyjny, w którym sprawa się toczy","zawsze równorzędny sąd administracyjny wskazany przez Naczelny Sad Administracyjny"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, za konsula czynności w postępowaniu sądowoadministracyjnym podejmuje:',
    a:"minister właściwy do spraw zagranicznych",
    options:["minister właściwy do spraw zagranicznych","Prezes Rady Ministrów","Prokuratoria Generalna Rzeczpospolitej Polskiej"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, w razie wniesienia skargi do sądu po wszczęciu postępowania administracyjnego w celu stwierdzenia niewazności aktu, postępowanie sądowe:',
    a:"podlega zawieszeniu",
    options:["toczy się dalej na zasadach ogólnych","moze się toczyć przy czym nie mozna podjąć ostatecznego rozstrzygnięcia w sprawie","podlega zawieszeniu"]

    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, spóźniony lub z mocy ustawy niedopuszczalny wniosek o przywrócenie terminu sąd:',
    a:"odrzuci na posiedzeniu niejawnym",
    options:["oddali na posiedzeniu jawnym","odrzuci na posiedzeniu niejawnym","uwzględni na posiedzeniu niejawnym jedynie wówczas, gdy przemawia za tym wazny interes strony lub interes publiczny"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, sąd zawiesza postępowanie z urzędu:',
    a:"jezeli w składzie organów jednostki organizacyjnej będącej stroną zachodzą braki uniemozliwiające jej działanie",
    options:["jezeli w składzie organów jednostki organizacyjnej będącej stroną zachodzą braki uniemozliwiające jej działanie","jezeli ujawni sie czyn, którego ustalenie w drodze karnej lub dyscyplinarnej mogłoby wywrzeć wpływ na rozstrzygnięcie sprawy sądowoadministracyjnej","w razie śmierci pełnomocnika, chyba ze strona działa przed sądem osobiście"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o postępowaniu przed sądami administracyjnymi, Naczelny Sąd Administracyjny, rozpoznając skargę kasacyjną, uchyla wyrok takze w części niezaskarzonej, jezeli',
    a:"zachodzi niewazność postępowania",
    options:["stanowi ona integralną część zaskarzonego wyorku i jest to konieczne dla oceny prawidłowości rozstrzygnięcia organu administracji publicznej","wymaga tego interes publiczny","zachodzi niewazność postępowania"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o ustroju sądów administracyjnych, sądem dyscyplinarnym w sprawach dyscyplinarnych sędziów sądów administracyjnych i asesorów sądowych jest:',
    a:"Naczelny Sąd Administracyjny",
    options:["Sąd Najwyzszy - Izba Dyscyplinarna","wojewódzki sąd administracyjny","Naczelny Sąd Administracyjny"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o ustroju sądów administracyjnych, wojewódzki sąd administracyjny dzieli się na wydziały, które tworzy i znosi:', 
    a:"Prezes Naczelnego Sądu Administracyjnego",
    options:["Prezes Naczelnego Sądu Administracyjnego","prezes właściwego wojewódzkiego sądu administracyjnego","Minister Sprawiedliwości"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o ustroju sądów administracyjnych, regulamin określający szczególowo tryb wewnętrznego urzędowania wojewódzkich sądów administracyjnych ustala, w drodze rozporządzenia:',
    a:"Prezydent RP",
    options:["Prezydent RP","Prezes NSA","Zgromadzenie Ogólne Sędziów Naczelnego Sądu Administracyjnego"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o ustroju sądów administracyjnych, Prezesa Naczelnego Sadu Administracyjnego powołuje Prezydent RP na:',
    a:"sześcioletnią kadencję",
    options:["sześcioletnią kadencję","pięcioletnią kadencję","czteroletnią kadencję"]
    },
    {
    q:'Zgodnie z ustawą - Prawo o ustroju sądów administracyjnych, rzecznika dyscyplinarnego Naczelnego Sądu Administracyjnego wybiera:',
    a:"Kolegium Naczelnego Sądu Administracyjnego",
    options:["Zgromadzenie Ogólne Sedziów Naczelnego Sadu Administracyjnego","Prezydium naczelnego Sądu Administracyjnego","Kolegium Naczelnego Sądu Administracyjnego"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, jezeli postępowanie jest prowadzone dłuzej niz jest to niezbędne do załatwiena sprawy, stronie słuzy prawo do wniesienia:',
    a:"ponaglenia",
    options:["zazalenia","ponaglenia","sprzeciwu"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracjnego, jezeli przedmiotem postępowania jest nałozenie na stronę obowiązku, a w sprawie pozostają wątpliwości co do treści normy prawnej, wątpliwości te:',
    a:"są rozstrzygane na korzyść strony, chyba ze sprzeciwiają się temu sporne interesy stron albo interesy osób trzecich, na które wynik postępowania ma bezpośredni wpływ",
    options:["wątpliwości te rozstrzygane są na korzyść organu","są zawsze rozstrzygane na korzyść strony","są rozstrzygane na korzyść strony, chyba ze sprzeciwiają się temu sporne interesy stron albo interesy osób trzecich, na które wynik postępowania ma bezpośredni wpływ"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, jezeli w podaniu wskazano adres, lecz nie spełnia ono innych wymagań ustalonych w przepisach prawa, nalezy:',
    a:"wezwać wnoszącego do usunięcia braków w wyznaczonym terminie, nie krótszym niz 7 dni z pouczeniem, ze nieusunięcie tych braków spowoduje pozostawienie podania bez rozpoznania",
    options:["wezwać wnoszącego do usunięcia braków w wyznaczonym terminie, nie krótszym niz 7 dni z pouczeniem, ze nieusunięcie tych braków spowoduje pozostawienie podania bez rozpoznania","pozostawić to podanie bez rozpoznania","wezwać wnoszącego do usunięcia braków w wyznaczonym terminie, nie krótszym niz 14 dni z pouczeniem, ze nieusunięcie tych braków spowoduje odrzucenie podania"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, decyzjami prawomocnymi są:',
    a:"decyzje ostateczne, których nie mozna zaskarzyc do sądu",
    options:["wszytskie decyzje są ostateczne","wszytskie decyzje wydane przez organ drugiej instancji","decyzje ostateczne, których nie mozna zaskarzyc do sądu"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, w przypadku gdy organ prowadzący postępowanie jest uczestnikiem mediacji, mediatorem moze być:',
    a:"osoba wpisana na listę stały mediatorów prowadzoną przez prezesa sądu okręgowego",
    options:["wyłącznie mediator powołany przez Prezesa Prokuratorii Generalnej RP","osoba wpisana na listę stały mediatorów prowadzoną przez prezesa sądu okręgowego","wyłącznie mediator wyznaczony przezo organ wyzszego stopnia"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, jezeli organ zawiesił postępowanie na zgodny wniosek stron, ządanie postępowania uwaza się za wycofane, jezeli zadna ze stron nie zwróci się o podjęcie postępowania w okresie:',
    a:"trzech lat od daty zawieszenia postępowania",
    options:["trzech lat od daty zawieszenia postępowania","pięciu lat od daty zawieszenia postępowania","siedmiu lat od daty wszczęcia postępowania"]
    },
    {
    q:'Zgodnie z Kodeksem postępowania administracyjnego, odmowa wznowienia postępowania następuje w drodze:',
    a:"postanowienia",
    options:["decyzji","postanowienia","czynności materialno-technicznej"]
    },
    {
    q:'Zgodnie z ustawą o gospodarce nieruchomościami, od orzeczenia samorządowego kolegium odwoławczego ustalającego nową wysokość opłaty rocznej z tytułu uzytkowania wieczystego, uzytkownik wieczysty moze wnieść:',
    a:"sprzeciw",
    options:["sprzeciw","odwołanie","wniosek o ponowne rozpatrzenie sprawy"]
    },
    {
    q:'Zgodnie z ustawą o gospodarce nieruchomościami, scalenia i podziału nieruchomości dokonuje się:',
    a:"uchwałą rady gminy",
    options:["decyzją starosty wykonującego zadania z zakresu administracji rządowej","decyzją wójta, burmistrza albo prezydenta miasta","uchwałą rady gminy"]
    },
    {
    q:'Zgodnie z ustawą o przekształceniu prawa uzytkowania wieczystego gruntów zabudowanych na cele mieszkaniowe w prawo własności tych gruntów, podstawę ujawnienia prawa własności gruntu w księdze wieczystej, w przypadku gruntów będących do 1 stycznia 2019 r. własnościa powiatów, stanowi:',
    a:"zaświadczenie wydane przez zarząd powiatu",
    options:["ostateczna decyzja wydana przez zarząd powiatu","zaświadczenie wydane przez zarząd powiatu","ostateczna decyzja wydana przez starostę"]
    },
    {
    q:'Zgodnie z ustawą o gospodarce nieruchomościami, w przypadku sprzedazy niezabudowanej nieruchomości nabytej uprzednio przez sprzedawcę od Skarbu Państwa, prawo pierwokupu wykonuje:',
    a:"wójt, burmistrz albo prezydent miasta",
    options:["wójt, burmistrz albo prezydent miasta","starosta wykonujący zadania z zakresu administracji rządowej","wojewoda"]    
    },
    {
    q:'Zgodnie z ustawą o planowaniu i zagospodarowaniu przestrzennym, określenie sposobów zagospodarowania i warunków zabudowy terenu następuje:',
    a:"w miejscowym planie zagospodarowania przestrzennego",
    options:["w stadium uwarunkowań i kierunków zagospodarowania przestrzennego gminy","w planie zagospodarowania przestrzennego województwa","w miejscowym planie zagospodarowania przestrzennego"]
    },
    {
    q:'Zgodnie z ustawą o ewidencji ludności, organ dokonujący zameldowania na pobyt czasowy wydaje osobie, na jej wniosek:',
    a:"zaświadczenie o zameldowaniu na pobyt czasowy",
    options:["zaświadczenie o zameldowaniu na pobyt czasowy","poświadczenie zameldowania","potwierdzenie meldunkowe"]
    },
    {
    q:'Zgodnie z ustawą o samorządzie powiatowym, organem powiatu jest:',
    a:"rada powiatu",
    options:["starosta","rada powiatu","powiatowy inspektor nadzoru budowlanego"]
    },
    {
    q:'Zgodnie z ustawą o samorządzie gminnym, uzyskanie przez gminę w wyniku monitoringu nagrania obrazu zawierające dane osobowe przechowuje się przez okres:',
    a:"3 miesięcy",
    options:["3 miesięcy","6 miesięcy","jednego roku"]
    },
    {
    q:'Zgodnie z ustawą o samorządzie województwa, decyzje wydane przez zarząd województwa w sprawach z zakresu administracji publicznej:',
    a:"podpisuje marszałek województwa",
    options:["podpisuje marszałek województwa","podpisują członkowie zarządu województwa, którzy brali udział w wydaniu decyzji","podpisują wszyscu członkowie zarządu województwa"]
    },
    {
    q:'Zgodnie z Regulaminem Europejskiego Trybunału Praw Człowieka, strona, wskazując dokładnie punkt lub punkty sentencji wyroku, które wymagają interpretacji, moze wystapić z wnioskiem o interpretację wyroku Europejskiego Trybunału praw Człowieka w okresie:',
    a:"roku od jego ogłoszenia",
    options:["roku od jego ogłoszenia","dwóch lat od jego ogłoszenia","trzech lat od jego ogłoszenia"]
    },
    {
    q:'Zgodnie z Konwencją o Ochronie Praw Człowieka i Podstawowych Wolności, Europejski Trybunał Praw Człowieka moze wydawać opinie doradcze w kwestiach prawnych dotyczących wykładni Konwencji i jej protokołów na wniosek:',
    a:"Komitetu Ministrów Rady Europy",
    options:["Zgromadzenia Parlamentarnego Rady Europy","Komitetu Ministrów Rady Europy","Komitetu Praw Człowieka"]
    },
    {
    q:'Zgodnie z Traktatem o Unii Europejskiej, państwo ubiegające się o członkostwo w Unii Europejskiej kieruje swój wniosek o członkostwo do:',
    a:"Rady",
    options:["Komisji Europejskiej","Rady Europejskiej","Rady"]
    },
    {
    q:'Zgodnie z Traktatem o funkcjonowaniu Unii Europejskiej, członkami Europejskiego Banku Inwestycyjnego są:',
    a:"Państwa Członkowskie",
    options:["ktajowe banki centralne","Państwa Członkowskie","państwowe banki krajowe niebędące krajowymi bankami centralnymi"]
    },
    {
    q:'Zgodnie z Kara Narodów Zjednoczonych, Statutem Międzynarodowego Trybunału Sprawiedliwości i Porozumieniem, ustanawiającym Komisję Przygotowawczą Narodów Zjednoczonych, głównym organem Narodow Zjednoczonych nie jest:',
    a:"Komisja Praw Człowieka",
    options:["Komisja Praw Człowieka","Rada Bezpieczeństwa","Międzynarodowy Trybunał Sprawiedliwości"]
    },



    



        ]
    }
});