let interestingPoints = [
  { id: 0, lat: 56.8608998, lon: 53.1739818, popup: 'С. М. Киров', markerRef: null },
  { id: 1, lat: 56.8607006, lon: 53.1683133, popup: 'Карающий меч', markerRef: null },
  { id: 2, lat: 56.8501240, lon: 53.2234392, popup: 'Памятник А. С. Пушкину', markerRef: null },
  { id: 3, lat: 56.8722782, lon: 53.1749263, popup: 'Вечный студент', markerRef: null },
  { id: 4, lat: 56.8596935, lon: 53.1965726, popup: 'Орден Октябрьской революции – награда города Ижевска', markerRef: null },
  { id: 5, lat: 56.8539106, lon: 53.2190270, popup: 'Вечный огонь', markerRef: null },
  { id: 6, lat: 56.8352231, lon: 53.2674707, popup: 'Интересный объект', markerRef: null },
  { id: 7, lat: 56.8461254, lon: 53.2164353, popup: 'И. А. Наговицын', markerRef: null },
  { id: 8, lat: 56.8647118, lon: 53.2305734, popup: 'жертвы пол. репрессий 1937г', markerRef: null },
  { id: 9, lat: 56.8441900, lon: 53.2123615, popup: 'Памятник-пушка 174-му ОИПТД', markerRef: null },
  { id: 10, lat: 56.8453575, lon: 53.2074182, popup: 'В.И. Ленин', markerRef: null },
  { id: 11, lat: 56.8585092, lon: 53.2094322, popup: '"Кот ученый"', markerRef: null },
  { id: 12, lat: 56.7841721, lon: 53.0722722, popup: 'Памятник', markerRef: null },
  { id: 13, lat: 56.8395479, lon: 53.1948428, popup: 'Памятник воинам-металлургам, погибшим в Великой Отечественной войне 1941-1945 гг.', markerRef: null },
  { id: 14, lat: 56.8439939, lon: 53.1976739, popup: 'Памятник Ижевским оружейникам', markerRef: null },
  { id: 15, lat: 56.8440201, lon: 53.1986003, popup: 'Михайловская колонна', markerRef: null },
  { id: 16, lat: 56.8445086, lon: 53.1911913, popup: 'Бюст А.Ф.Дерябина', markerRef: null },
  { id: 17, lat: 56.8500473, lon: 53.2903156, popup: 'Звёздочка', markerRef: null },
  { id: 18, lat: 56.8361923, lon: 53.2607569, popup: 'Останки лыжной станции', markerRef: null },
  { id: 19, lat: 56.8195650, lon: 53.0456645, popup: 'Дуровская грань', markerRef: null },
  { id: 20, lat: 56.8497327, lon: 53.2046778, popup: 'Революционный некрополь', markerRef: null },
  { id: 21, lat: 56.8210597, lon: 53.2129683, popup: 'В. И. Ленин', markerRef: null },
  { id: 22, lat: 56.8598440, lon: 53.1977046, popup: 'Памятник Жертвам радиационных катастроф и аварий', markerRef: null },
  { id: 23, lat: 56.8780002, lon: 53.1856717, popup: 'Памятник "Ветерану-металлургу"', markerRef: null },
  { id: 24, lat: 56.7984695, lon: 53.1865481, popup: 'Паровоз Эр 796-28', markerRef: null },
  { id: 25, lat: 56.8021614, lon: 53.1894621, popup: 'Памятная доска П. И. Чайковскому', markerRef: null },
  { id: 26, lat: 56.8781162, lon: 53.2342900, popup: 'Памятник строителю', markerRef: null },
  { id: 27, lat: 56.8030659, lon: 53.2356943, popup: 'Интересный объект', markerRef: null },
  { id: 28, lat: 56.8484265, lon: 53.2180834, popup: 'Трокай Борисов', markerRef: null },
  { id: 29, lat: 56.8490691, lon: 53.2187373, popup: 'Иван Дмитриевич Пастухов', markerRef: null },
  { id: 30, lat: 56.8536641, lon: 53.2171468, popup: 'Кузебай Герд', markerRef: null },
  { id: 31, lat: 56.8995064, lon: 53.1416342, popup: 'Лось', markerRef: null },
  { id: 32, lat: 56.8544118, lon: 53.3594531, popup: 'Интересный объект', markerRef: null },
  { id: 33, lat: 56.7862875, lon: 53.3183368, popup: 'Поклонный Памятный Крест на месте боев за Ижевск 1918 г.', markerRef: null },
  { id: 34, lat: 56.8469875, lon: 53.1998991, popup: 'Ю. А. Гагарин', markerRef: null },
  { id: 35, lat: 56.9026233, lon: 53.3758454, popup: 'Интересный объект', markerRef: null },
  { id: 36, lat: 56.8413244, lon: 53.2216538, popup: 'Ленин В. У.', markerRef: null },
  { id: 37, lat: 56.8409354, lon: 53.2160740, popup: '1941-1945', markerRef: null },
  { id: 38, lat: 56.7849432, lon: 53.3793422, popup: 'Интересный объект', markerRef: null },
  { id: 39, lat: 56.8195590, lon: 53.1794456, popup: 'П. З. Субботин', markerRef: null },
  { id: 40, lat: 56.8608915, lon: 53.1736962, popup: 'Танк ИС-3', markerRef: null },
  { id: 41, lat: 56.8596246, lon: 53.1925375, popup: 'Монумент в память о воинах-интернационалистах', markerRef: null },
  { id: 42, lat: 56.8595079, lon: 53.1928870, popup: 'БТР', markerRef: null },
  { id: 43, lat: 56.8595329, lon: 53.1926749, popup: 'Стелла "Прощай, оружие"', markerRef: null },
  { id: 44, lat: 56.8525272, lon: 53.2037414, popup: 'Ижик', markerRef: null },
  { id: 45, lat: 56.8457634, lon: 53.1987508, popup: 'Памятник М. Горькому', markerRef: null },
  { id: 46, lat: 56.8388236, lon: 53.2058424, popup: 'З. А. Космодемьянская', markerRef: null },
  { id: 47, lat: 56.8828165, lon: 53.2459334, popup: 'Памятник Ф.Э. Дзержинскому', markerRef: null },
  { id: 48, lat: 56.8598236, lon: 53.2335067, popup: 'Коза', markerRef: null },
  { id: 49, lat: 56.8549504, lon: 53.2189598, popup: 'Воинам-Депутатам Верховного Совета УАССР', markerRef: null },
  { id: 50, lat: 56.8599973, lon: 53.1768236, popup: 'Мобильный ЗРК "Оса-АКМ"', markerRef: null },
  { id: 51, lat: 56.8480398, lon: 53.1160480, popup: 'Образцы продукции ЗЯБ', markerRef: null },
  { id: 52, lat: 56.8655668, lon: 53.2095962, popup: 'Скульптура "Граф Шувалов"', markerRef: null },
  { id: 53, lat: 56.8563488, lon: 53.2924899, popup: 'Памятник преподобному Серафиму Саровскому', markerRef: null },
  { id: 54, lat: 56.8322803, lon: 53.1855482, popup: 'Памятник сталеварам', markerRef: null },
  { id: 55, lat: 56.8492270, lon: 53.2231102, popup: 'Памятник Михаилу Васильевичу Ломоносову', markerRef: null },
  { id: 56, lat: 56.8503289, lon: 53.2346964, popup: 'Памятник Нефтян', markerRef: null },
  { id: 57, lat: 56.8719432, lon: 53.2273092, popup: 'Скульптура "Электрик и воробьи"', markerRef: null },
  { id: 58, lat: 56.8508509, lon: 53.2031626, popup: 'П.В. Можаров', markerRef: null },
  { id: 59, lat: 56.8771153, lon: 53.2587485, popup: 'Обелиск воинам ВС СССР', markerRef: null },
  { id: 60, lat: 56.8652708, lon: 53.1740837, popup: '"Бронзовый волк"', markerRef: null },
  { id: 61, lat: 56.8659624, lon: 53.1722639, popup: 'Белый медведь', markerRef: null },
  { id: 62, lat: 56.8726689, lon: 53.2329240, popup: 'Мемориал, посвящённый невинным жертвам Геноцида армян 1915 года', markerRef: null },
  { id: 63, lat: 56.8457863, lon: 53.2003305, popup: 'Ансамбль купеческих зданий середины XIX века.', markerRef: null },
  { id: 64, lat: 56.8536928, lon: 53.2183631, popup: 'Евге́ний Макси́мович Кунгу́рцев', markerRef: null },
  { id: 65, lat: 56.8540218, lon: 53.2190117, popup: 'Монумент боевой и трудовой славы', markerRef: null },
  { id: 66, lat: 56.8447385, lon: 53.1988871, popup: 'Здание бывшего Офицерского собрания', markerRef: null },
  { id: 67, lat: 56.8441162, lon: 53.2033036, popup: 'Комплекс жилых домов Ижстальзавода. («Дома на Кирхе»)', markerRef: null },
  { id: 68, lat: 56.8497041, lon: 53.2059577, popup: 'Святые Петр и Феврония Муромские', markerRef: null },
  { id: 69, lat: 56.8480664, lon: 53.2048639, popup: 'Ф. А. Пушина', markerRef: null },
  { id: 70, lat: 56.8504720, lon: 53.2064369, popup: 'М. Т. Калашников', markerRef: null },
  { id: 71, lat: 56.8441185, lon: 53.2174203, popup: 'В. И. Кудинов', markerRef: null },
  { id: 72, lat: 56.8829011, lon: 53.1880147, popup: 'В память военнопленным венграм', markerRef: null },
  { id: 73, lat: 56.8439911, lon: 53.1976256, popup: 'Памятник', markerRef: null },
  { id: 74, lat: 56.8724794, lon: 53.1750494, popup: 'Противотанковая пушка', markerRef: null },
  { id: 75, lat: 56.8722657, lon: 53.1753416, popup: 'Противотанковая пушка', markerRef: null },
  { id: 76, lat: 56.8515094, lon: 53.2085711, popup: 'Park Inn', markerRef: null },
  { id: 77, lat: 56.8013379, lon: 53.1399047, popup: 'отель Солнечный', markerRef: null },
  { id: 78, lat: 56.7996719, lon: 53.1618589, popup: 'Шакира', markerRef: null },
  { id: 79, lat: 56.8462688, lon: 53.2195685, popup: 'Крокодил', markerRef: null },
  { id: 80, lat: 56.7939781, lon: 53.0486487, popup: 'Чекерил', markerRef: null },
  { id: 81, lat: 56.8488335, lon: 53.2569167, popup: 'Общежитие', markerRef: null },
  { id: 82, lat: 56.8700040, lon: 53.2189526, popup: 'Общежитие', markerRef: null },
  { id: 83, lat: 56.8701145, lon: 53.2201835, popup: 'Общежитие №2', markerRef: null },
  { id: 84, lat: 56.9517890, lon: 53.0640428, popup: 'Интересный объект', markerRef: null },
  { id: 85, lat: 56.8111339, lon: 53.1894171, popup: 'Италмас', markerRef: null },
  { id: 86, lat: 56.8456347, lon: 53.1975710, popup: 'Ротонда', markerRef: null },
  { id: 87, lat: 56.8548223, lon: 53.2206066, popup: 'Стела здоровья, счастья и благополучия', markerRef: null },
  { id: 88, lat: 56.8790826, lon: 53.2529608, popup: 'Уральская', markerRef: null },
  { id: 89, lat: 56.8333578, lon: 53.2872503, popup: 'Green Roof', markerRef: null },
  { id: 90, lat: 56.8670901, lon: 53.2141192, popup: 'Премьер-Отель', markerRef: null },
  { id: 91, lat: 56.8465310, lon: 53.1979153, popup: 'Музей Ижевска', markerRef: null },
  { id: 92, lat: 56.8767887, lon: 53.2651646, popup: 'Кама', markerRef: null },
  { id: 93, lat: 56.8382153, lon: 53.1591137, popup: 'Сауна Тазик', markerRef: null },
  { id: 94, lat: 56.8346982, lon: 53.1557005, popup: 'Сауна Заречная', markerRef: null },
  { id: 95, lat: 56.8402741, lon: 53.1946883, popup: 'Царь-пушка', markerRef: null },
  { id: 96, lat: 56.8209367, lon: 53.1819934, popup: 'Shark-hotel', markerRef: null },
  { id: 97, lat: 56.9286615, lon: 53.2244196, popup: 'Интересный объект', markerRef: null },
  { id: 98, lat: 56.9356824, lon: 53.2400545, popup: 'Golden fish', markerRef: null },
  { id: 99, lat: 56.8581668, lon: 53.3574027, popup: 'Интересный объект', markerRef: null },
  { id: 100, lat: 56.8570575, lon: 53.3433467, popup: 'Стелла «Первомайский»', markerRef: null },
  { id: 101, lat: 56.8535452, lon: 53.2163399, popup: 'Национальный музей Удмуртской Республики имени Кузебая Герда', markerRef: null },
  { id: 102, lat: 56.8405368, lon: 53.2004866, popup: 'Музей-квартира Г.Д. Красильникова', markerRef: null },
  { id: 103, lat: 56.8321656, lon: 53.4345937, popup: 'HOTEL', markerRef: null },
  { id: 104, lat: 56.8323166, lon: 53.4382578, popup: 'Баку', markerRef: null },
  { id: 105, lat: 56.8381655, lon: 53.2118389, popup: 'Викторианская чугунная беседка', markerRef: null },
  { id: 106, lat: 56.8107601, lon: 53.1889307, popup: 'Титан', markerRef: null },
  { id: 107, lat: 56.8522881, lon: 53.1951754, popup: 'Стелла 1760', markerRef: null },
  { id: 108, lat: 56.8518686, lon: 53.1951634, popup: 'Стелла 2010', markerRef: null },
  { id: 109, lat: 56.8464639, lon: 53.1990437, popup: 'Свадебная карусель', markerRef: null },
  { id: 110, lat: 56.8468678, lon: 53.1989418, popup: 'Осьминог', markerRef: null },
  { id: 111, lat: 56.8471046, lon: 53.1989582, popup: '"Автодром"', markerRef: null },
  { id: 112, lat: 56.8476857, lon: 53.1988472, popup: '"Паровозик зоопарк"', markerRef: null },
  { id: 113, lat: 56.8478518, lon: 53.1980631, popup: '"Вихрь"', markerRef: null },
  { id: 114, lat: 56.8462144, lon: 53.1991057, popup: 'Орбита', markerRef: null },
  { id: 115, lat: 56.8455324, lon: 53.1979815, popup: 'Карета', markerRef: null },
  { id: 116, lat: 56.9189896, lon: 53.1455907, popup: 'Интересный объект', markerRef: null },
  { id: 117, lat: 56.8424312, lon: 53.1799152, popup: 'НПЦ "Пружина"', markerRef: null },
  { id: 118, lat: 56.8300042, lon: 53.4363652, popup: 'Отель Сиреневый сад', markerRef: null },
  { id: 119, lat: 56.8013985, lon: 53.1873576, popup: 'Нарцисс', markerRef: null },
  { id: 120, lat: 56.9008911, lon: 53.3168691, popup: 'Титаник', markerRef: null },
  { id: 121, lat: 56.9211252, lon: 53.2217552, popup: 'Интересный объект', markerRef: null },
  { id: 122, lat: 56.8823296, lon: 53.3013037, popup: 'Музей истории ИжАвто', markerRef: null },
  { id: 123, lat: 56.8669962, lon: 53.2149474, popup: 'like hostel', markerRef: null },
  { id: 124, lat: 56.8458315, lon: 53.2132056, popup: 'Музей МВД по Удмуртской Республике', markerRef: null },
  { id: 125, lat: 56.8463272, lon: 53.1960943, popup: 'Памятник "Кормилице, или человеческой благодарности"', markerRef: null },
  { id: 126, lat: 56.8478226, lon: 53.1954077, popup: 'Памятник "Первому мотоциклу ИЖ-1"', markerRef: null },
  { id: 127, lat: 56.8479011, lon: 53.1953822, popup: 'Скульптура "Потомок Гефеста"', markerRef: null },
  { id: 128, lat: 56.8480199, lon: 53.1952977, popup: 'Скульптура "Кафтанщик"', markerRef: null },
  { id: 129, lat: 56.8481409, lon: 53.1952280, popup: 'Скульптура "Велосипедист-победоносец"', markerRef: null },
  { id: 130, lat: 56.8455871, lon: 53.1979276, popup: 'Дерево любви', markerRef: null },
  { id: 131, lat: 56.8470087, lon: 53.2003450, popup: 'Стелла "Аксион"', markerRef: null },
  { id: 132, lat: 56.8663252, lon: 53.2086252, popup: '"Я люблю Ижевск"', markerRef: null },
  { id: 133, lat: 56.8657519, lon: 53.1713042, popup: 'Интересный объект', markerRef: null },
  { id: 134, lat: 56.8653868, lon: 53.1709738, popup: 'Водяная мельница', markerRef: null },
  { id: 135, lat: 56.8584047, lon: 53.1938764, popup: 'Обсерватория', markerRef: null },
  { id: 136, lat: 56.8457121, lon: 53.1961297, popup: 'Солнечные часы', markerRef: null },
  { id: 137, lat: 56.8553727, lon: 53.2112630, popup: '"Связка ключей"', markerRef: null },
  { id: 138, lat: 56.8447216, lon: 53.2048494, popup: 'Композиция «Телеграф на службе человека»', markerRef: null },
  { id: 139, lat: 56.8528885, lon: 53.2105869, popup: 'Нулевой километр автодорог Удмуртии', markerRef: null },
  { id: 140, lat: 56.8520422, lon: 53.2109061, popup: 'Доска почёта Удмуртии', markerRef: null },
  { id: 141, lat: 56.8471093, lon: 53.1999479, popup: 'Галерея почёта', markerRef: null },
  { id: 142, lat: 56.8468671, lon: 53.1999831, popup: 'Галерея почёта', markerRef: null },
  { id: 143, lat: 56.8620339, lon: 53.1875848, popup: 'Народный музей авиации и космонавтики им. Ю. А. Гагарина', markerRef: null },
  { id: 144, lat: 56.8593286, lon: 53.1938920, popup: 'Парк скульптур', markerRef: null },
  { id: 145, lat: 56.8495405, lon: 53.2059927, popup: 'Скамья примерения', markerRef: null },
  { id: 146, lat: 56.8615398, lon: 53.2141462, popup: 'R2-D2 и C-3PO', markerRef: null },
  { id: 147, lat: 56.8592194, lon: 53.1941845, popup: 'Интересный объект', markerRef: null },
  { id: 148, lat: 56.8589649, lon: 53.1933877, popup: 'Интересный объект', markerRef: null },
  { id: 149, lat: 56.8593310, lon: 53.1945694, popup: 'Интересный объект', markerRef: null },
  { id: 150, lat: 56.8596109, lon: 53.1936284, popup: 'Интересный объект', markerRef: null },
  { id: 151, lat: 56.8438082, lon: 53.2174994, popup: 'Капля нефти', markerRef: null },
  { id: 152, lat: 56.8364397, lon: 53.2386306, popup: 'Музей детства', markerRef: null },
  { id: 153, lat: 56.8428600, lon: 53.2964167, popup: 'Дети на скамейке', markerRef: null },
  { id: 154, lat: 56.8584257, lon: 53.2117079, popup: 'Арка', markerRef: null },
  { id: 155, lat: 56.8590338, lon: 53.2116150, popup: 'Арка', markerRef: null },
  { id: 156, lat: 56.8590157, lon: 53.2116803, popup: '"Сундук"', markerRef: null },
  { id: 157, lat: 56.8586901, lon: 53.2118036, popup: '"Морской берег"', markerRef: null },
  { id: 158, lat: 56.8586183, lon: 53.2117635, popup: '"Избушка на курьих ножках"', markerRef: null },
  { id: 159, lat: 56.8584995, lon: 53.2116428, popup: 'Сундук на цепи', markerRef: null },
  { id: 160, lat: 56.8585863, lon: 53.2117918, popup: 'Лебедь', markerRef: null },
  { id: 161, lat: 56.8651464, lon: 53.1962617, popup: 'Отличная уютная квартира .2 подъезд 5 этаж ,54 кв.', markerRef: null },
  { id: 162, lat: 56.8371595, lon: 53.2734954, popup: 'Комплекс памятников, 3-5 вв. н.э.', markerRef: null },
  { id: 163, lat: 56.8724794, lon: 53.1750494, popup: 'Противотанковая пушка', markerRef: null },
  { id: 164, lat: 56.8722657, lon: 53.1753416, popup: 'Противотанковая пушка', markerRef: null },
  { id: 165, lat: 56.8344904, lon: 53.2615831, popup: 'Аэрокомплекс SkyFly', markerRef: null },
  { id: 166, lat: 56.8969823, lon: 53.3305877, popup: 'Интересный объект', markerRef: null },
  { id: 167, lat: 56.8970979, lon: 53.3306125, popup: 'Интересный объект', markerRef: null },
  ];
  