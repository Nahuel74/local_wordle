const words = [
    'abran', 'acoja', 'acojo', 'acres', 'actas', 'actos', 'acuna', 'acuso', 'acuña', 'afeas', 'aguda', 'agudo', 'albas', 'alces', 'aleja', 'algas', 
    'alias', 'almas', 'alojo', 'aloja', 'altas', 'altos', 'ancas', 'andas', 'andes', 'anima', 'animo', 'apoda', 'apodo', 'aptas', 'arces', 'arcos', 
    'ardan', 'ardes', 'arias', 'arios', 'arpas', 'artes', 'aruba', 'aseos', 'asilo', 'asnos', 'autos', 'avara', 'ayuda', 'azote', 'aerea', 'añoro', 
    'bajas', 'bajos', 'balas', 'bares', 'barre', 'barra', 'basta', 'batas', 'bates', 'batea', 'baños', 'bebed', 'bebes', 'besos', 'bodas', 'bolla', 
    'bondi', 'bonos', 'borre', 'botas', 'botes', 'boyas', 'bruta', 'bulos', 'busca', 'busco', 'buses', 'cabra', 'cacho', 'cafes', 'cajas', 'calce', 
    'calco', 'cales', 'calle', 'calmo', 'campo', 'canas', 'canes', 'cansa', 'cansa', 'canta', 'canto', 'capas', 'capta', 'capto', 'carga', 'cargo', 
    'caros', 'casas', 'casca', 'casco', 'casos', 'casas', 'catar', 'catas', 
    'catas', 'cause', 'cause', 'cavas', 'cavos', 'cazad', 'cazan', 'cazas', 'cazos', 'caida', 'caido', 'cañas', 'cañeo', 'cañas', 'cañis', 'cebos', 
    'cedan', 'cedas', 'ceded', 'ceden', 'cedes', 'cedas', 'cedes', 'cefos', 'cejas', 'cejas', 'celes', 'celia', 'celta', 'cenas', 'cepas', 'ceras', 
    'cerca', 'cerco', 'cerdo', 'ceros', 'cerra', 'cerro', 'chefs', 'chile', 'china', 'chiis', 'choco', 'chuza', 'ciega', 'cimas', 'cimas', 'cines', 
    'citas', 'citas', 'clamo', 'clamo', 'clara', 'clava', 'clava', 'clave', 'clavo', 'clubs', 'coces', 'coces', 'codeo', 'codos', 'coged', 'cogen', 
    'coger', 'coges', 'coges', 'cogia', 'cojan', 'cojas', 'cojos', 'cojas', 'colas', 'coles', 'colma', 'colma', 'colas', 'colon', 'coman', 'comas', 
    'combo', 'comed', 'comes', 'comas', 'comes', 'conos', 'copas', 'copos', 'copta', 'copas', 'coral', 'coras', 'corea', 'corea', 'corea', 'corra', 
    'corre', 'corro', 'corre', 'corri', 'corsa', 'cosas', 'coses', 'costo', 'cosas', 'coses', 'coños', 'crasa', 'creas', 'crees', 'creme', 'cremo', 
    'creme', 'cremo', 'crees', 'croar', 'cruje', 'crien', 'cubas', 'cubos', 'cucas', 'cucos', 'cucas', 'cuida', 'cuide', 'cuida', 'cuide', 'culos', 
    'culta', 'cunas', 'cunas', 'cupos', 'cural', 'curas', 'curdo', 'cures', 'curio', 'curro', 'curso', 'curas', 'cures', 'cuñas', 'cuñas', 'dados', 
    'dagas', 'dance', 'dance', 'datos', 'dañes', 'daños', 'dañes', 'debas', 'debed', 'deben', 'debes', 'debes', 'dedos', 'dejas', 'dejas', 'densa', 
    'dices', 'dijes', 'diles', 'divas', 'divos', 'doble', 'dolos', 'doman', 'domas', 'domes', 'domos', 'domas', 'domes', 'donan', 'donas', 'donen', 
    'dones', 'donas', 'dones', 'dores', 'doria', 'dorio', 'dotas', 'dotes', 'dotas', 'dotes', 'doñas', 'drupa', 'dubai', 'dubai', 'dudan', 'dunas', 
    'dures', 'duros', 'dures', 'duhos', 'echas', 'eches', 'echos', 'eches', 'edita', 'edita', 'eleve', 'eleve', 'ellos', 'emana', 'emana', 'emoji', 
    'emoyi', 'emula', 'emule', 'emulo', 'emula', 'emule', 'emulo', 'emues', 'enoja', 'enojo', 'enoja', 'entes', 'envio', 'erizo', 'errar', 'erres', 
    'erres', 'espia', 'estad', 'estas', 'euros', 'evita', 'evita', 'falle', 'falle', 'falos', 'falta', 'ferio', 'fetos', 'ficad', 'ficas', 'ficas', 
    'fijas', 'fijas', 'filas', 'files', 'filas', 'finco', 'finco', 'fines', 'fique', 'fique', 'firme', 'focos', 'folia', 'folia', 'folla', 'follo', 
    'follo', 'fomes', 'force', 'forme', 'formo', 'forma', 'forme', 'formo', 'fosos', 'fotos', 'frida', 'frita', 'frita', 'frias', 'fugas', 'fugue', 
    'fugue', 'fugas', 'fumes', 'fumes', 'fusil', 'gabon', 'gafas', 'galas', 'gales', 'galia', 'galos', 'ganes', 'ganas', 'ganes', 'gases', 'gasto', 
    'gatos', 'genes', 'ghana', 'gimen', 'gimes', 'giras', 'giros', 'giras', 'godas', 'godos', 'goles', 'gorda', 'gorra', 'grabe', 'grabe', 'grave', 
    'grave', 'grite', 'grita', 'grite', 'grito', 'groar', 'gruas', 'gurus', 'güera', 'habas', 'habed', 'habla', 'habra', 'habre', 'habia', 'hacen', 
    'haces', 'hacha', 'haces', 'hacia', 'hagan', 'hagas', 'hagas', 'haiti', 'halan', 'halas', 'hallo', 'halla', 'halos', 'halas', 'harte', 'haran', 
    'haras', 'haria', 'hayan', 'hayas', 'hayas', 'heces', 'hecha', 'hecho', 'hemos', 'hiero', 'higos', 'hijas', 'hijos', 'hilan', 'hilos', 'hinca', 
    'hinco', 'hinco', 'hipos', 'hitos', 'hoces', 'hoces', 'hojas', 'horne', 'horne', 'huera', 'huero', 'hunas', 'hunos', 'hurgo', 'husos', 'ibais', 
    'ideas', 'ideas', 'iglus', 'india', 'infle', 'infle', 'intis', 'ireis', 'irian', 'irias', 'isbas', 'islas', 'ivana', 'jabes', 'jadee', 'jades', 
    'jadee', 'jairo', 'jalan', 'jalon', 'japon', 'jefes', 'jemal', 'jemes', 'jerga', 'jesus', 'jodas', 'jodes', 'jodas', 'jodes', 'jonia', 'joyas', 
    'joyel', 'jugos', 'jujeo', 'julio', 'jures', 'jures', 'kanes', 'kenia', 'kunas', 'kurda', 'labes', 'labia', 'labre', 'labre', 'lacra', 'lacta', 
    'lacta', 'lados', 'ladro', 'ladro', 'lagos', 'lagos', 'lamas', 'lamen', 'lames', 'lamio', 'lamas', 'lames', 'lance', 'lapas', 'larga', 'latas', 
    'latas', 'laves', 'laves', 'laxas', 'laxos', 'laxas', 'lazan', 'lazos', 'legas', 'legos', 'lejos', 'lemas', 'lenta', 'levas', 'leves', 'levas', 
    'leves', 'leyes', 'leias', 'libia', 'libia', 'libre', 'libro', 'licua', 'licua', 'licua', 'lides', 'limas', 'linda', 'liras', 'lises', 'locas', 
    'locha', 'locos', 'locus', 'logro', 'lomos', 'lores', 'loros', 'losas', 'losas', 'loteo', 'lotes', 'lozas', 'luces', 'luche', 'lucho', 'lucha', 
    'luche', 'lucho', 'lunas', 'lusas', 'lusos', 'macao', 'maceo', 'magos', 'maine', 'malas', 'males', 'malos', 'malta', 'malis', 'mamas', 'mamas', 
    'manas', 'manca', 'manca', 'manco', 'manda', 'mando', 'mango', 'manos', 'manas', 'mapas', 'marco', 'mares', 'marro', 'marin', 'masco', 'masco', 
    'mases', 'mases', 'matas', 'mates', 'matas', 'mates', 'mayas', 'mayas', 'mazos', 'mañas', 'meaba', 'mecen', 'meces', 'meces', 'media', 'memes', 
    'menes', 'menta', 'menes', 'menus', 'meras', 'merco', 'merco', 'meros', 'meras', 'mesas', 'mesen', 'meses', 'mesas', 'meses', 'metas', 'metes', 
    'metas', 'mezas', 'mezas', 'micas', 'midas', 'midas', 'migro', 'miles', 'minas', 'mines', 'minsk', 'minas', 'mines', 'miras', 'miren', 'mires', 
    'miras', 'mires', 'misad', 'misas', 'misma', 'mista', 'mista', 'misas', 'mitos', 'mitro', 'mitro', 'mocos', 'modas', 'modos', 'mofas', 'mofes', 
    'mofas', 'mofes', 'mojan', 'mojar', 'mojas', 'mojen', 'mojos', 'mojas', 'molas', 'moles', 'molas', 'moles', 'monas', 'monos', 'monte', 'monto', 
    'mopas', 'moras', 'mores', 'moros', 'morro', 'moras', 'mores', 'moscu', 'motas', 'moved', 'mozas', 'moños', 'mucas', 'mucos', 'mudas', 'mudos', 
    'mudas', 'mueve', 'mugen', 'muges', 'mugid', 'mugio', 'mugis', 'mujan', 'mujas', 'mulas', 'multe', 'multa', 'multe', 'muros', 'musas', 'musas', 
    'nabos', 'naces', 'naces', 'nadas', 'nades', 'nades', 'narre', 'narre', 'natas', 'natos', 'nauru', 'nauru', 'naves', 'nazca', 'nazis', 'necia', 
    'nepal', 'netos', 'nexos', 'niños', 'nomos', 'notas', 'notes', 'notas', 'notes', 'nubes', 'nucas', 'nudas', 'nudos', 'nulas', 'nulos', 'niger', 
    'obras', 'odias', 'odios', 'odias', 'odres', 'ogros', 'ollas', 'omani', 'ombus', 'ondas', 'onzas', 'opera', 'opera', 'optas', 'optas', 'orbes', 
    'orcas', 'orden', 'orina', 'ornan', 'ornee', 'ornee', 'oseas', 'oseas', 'osito', 'otras', 'ovulo', 'ovulo', 'oirte', 'pacas', 'pacen', 'pacta', 
    'pacta', 'pacto', 'paces', 'pagan', 'pague', 'pague', 'pajas', 'pajes', 'palas', 'palme', 'palma', 'palme', 'palos', 'palpa', 'panes', 'papua', 
    'papus', 'paras', 'parda', 'pardo', 'paree', 'paren', 'pares', 'paree', 'parta', 'parti', 'paras', 'paria', 'paris', 'paris', 'pasas', 'pasen', 
    'pases', 'paseo', 'pasas', 'pases', 'patas', 'patea', 'patea', 'patos', 'pates', 'pavos', 'pañal', 'pecas', 'peces', 'pedos', 'pegas', 'pegue', 
    'pelos', 'penan', 'penas', 'penda', 'pende', 'penen', 'penes', 'pensa', 'pense', 'penas', 'penes', 'peras', 'perdi', 'peros', 'pesad', 'pesas', 
    'pesca', 'pesen', 'peses', 'pesos', 'pesas', 'peses', 'petas', 'petos', 'petas', 'peais', 'peñas', 'pican', 'picas', 'picos', 'picas', 'pidas', 
    'pides', 'pidas', 'pines', 'pipas', 'pisad', 'pises', 'pitan', 'pitos', 'playa', 'plena', 'pleno', 'poblo', 'pocas', 'pocos', 'podas', 'poded', 
    'poder', 'podes', 'podra', 'podre', 'podas', 'podes', 'podia', 'polos', 'poned', 'ponen', 'poner', 'pones', 'ponga', 'pones', 'ponia', 'porfa', 
    'poros', 'posas', 'posee', 'posen', 'poses', 'posee', 'posos', 'posas', 'poses', 'potos', 'poyas', 'poyas', 'pozos', 'prada', 'prado', 'preve', 
    'preña', 'preño', 'preña', 'preño', 'primo', 'probo', 'pueda', 'puede', 'puedo', 'pujan', 'pujas', 'pujen', 'pujas', 'pulen', 'pumas', 'puras', 
    'purga', 'puros', 'putas', 'qatar', 'quede', 'quede', 'queme', 'quemo', 'quema', 'queme', 'quemo', 'quere', 'quise', 'quiso', 'quito', 'quito', 
    'quito', 'rabia', 'rabos', 'rabon', 'ralbe', 'ralbe', 'ramos', 'ranas', 'rapas', 'rapas', 'raras', 'raros', 'rasas', 'rasco', 'rasca', 'raspa', 
    'rasas', 'ratas', 'ratos', 'razas', 'razas', 'raeis', 'reces', 'recia', 'reces', 'redes', 'regia', 'regia', 'reino', 'rejas', 'remas', 'remes', 
    'remos', 'remas', 'remes', 'renos', 'rento', 'renta', 'rento', 'reses', 'reste', 'reste', 'resto', 'retes', 'retos', 'retes', 'reyes', 'rezan', 
    'rezas', 'rezas', 'reios', 'reuna', 'rices', 'rifas', 'rimas', 'rimen', 'rimes', 'rimas', 'rimes', 'rinda', 'ritos', 'roban', 'robes', 'robes', 
    'rocas', 'rodas', 'rodas', 'rojas', 'rojos', 'roles', 'rolla', 'rolla', 'rollo', 'romas', 'romos', 'rompa', 'rompe', 'rompe', 'rones', 'rotas', 
    'rotos', 'rotas', 'royas', 'royos', 'royas', 'rubis', 'rudos', 'rueis', 'rugen', 'ruges', 'rugio', 'rugis', 'rujan', 'rulos', 'runas', 'rusas', 
    'rusia', 'rusos', 'rutas', 'rueis', 'ruñas', 'ruñas', 'sabia', 'sabia', 'sacan', 'sacas', 'sacos', 'sacra', 'sacas', 'sajon', 'sakes', 'saldo', 
    'salga', 'salgo', 'salga', 'salgo', 'salta', 'salta', 'salto', 'salva', 'salve', 'salva', 'salve', 'salvo', 'salis', 'samoa', 'sanad', 'sanas', 
    'sanos', 'santa', 'sanas', 'sapos', 'saudi', 'sañas', 'sebos', 'secan', 'sedad', 'sedan', 'sedas', 'seden', 'sedes', 'sedas', 'sedes', 'senta', 
    'sente', 'sento', 'sepas', 'sepas', 'seres', 'seria', 'seria', 'serro', 'seran', 'seras', 'seria', 'setas', 'setos', 'sexos', 'señas', 'siega', 
    'siego', 'sigan', 'siria', 'siria', 'siseo', 'situo', 'soban', 'sobas', 'sobes', 'sobre', 'sobes', 'sogas', 'solas', 'solas', 'soles', 'solos', 
    'soles', 'solia', 'somos', 'sonad', 'sonar', 'sonda', 'sonas', 'sopas', 'soplo', 'soplo', 'sopas', 'sorbe', 'sorbe', 'soñad', 'soñar', 'soñas', 
    'soñes', 'subas', 'subes', 'sucia', 'sucre', 'sudan', 'sudar', 'sudas', 'sudes', 'sudan', 'sudas', 'sudes', 'suela', 'suele', 'suena', 'suene', 
    'sueno', 'sueña', 'sueñe', 'sueño', 'suiza', 'suiza', 'sumas', 'sumas', 'supon', 'suras', 'sushi', 'saxeo', 'super', 'tabas', 'tabus', 'tacos', 
    'talas', 'talas', 'tales', 'tapas', 'tapen', 'tapes', 'tapas', 'tapes', 'tarde', 'tegus', 'tejas', 'tejas', 'telas', 'temas', 'temen', 'temes', 
    'temas', 'temes', 'tened', 'tenga', 'tengo', 'tenia', 'tensa', 'tensa', 'tenso', 'tenes', 'tenia', 'terca', 'tersa', 'terse', 'tersa', 'terse', 
    'terso', 'testo', 'testa', 'testo', 'tetar', 'tetas', 'tetas', 'texas', 'teñia', 'tiene', 'times', 'times', 'tipos', 'tiras', 'tiros', 'tiras', 
    'tisus', 'titan', 'tocas', 'todas', 'todos', 'togas', 'togas', 'tomad', 'toman', 'tomas', 'tomes', 'tomas', 'tomes', 'tonga', 'tonos', 'tonta', 
    'topas', 'topos', 'topas', 'toque', 'torpe', 'tosed', 'toses', 'traed', 'traen', 'traer', 'traes', 'traga', 'trajo', 'trama', 'trato', 'traes', 
    'traia', 'trino', 'troco', 'trono', 'trote', 'trios', 'tubos', 'tulio', 'tumba', 'tunas', 'tunas', 'tolar', 'tunez', 'untes', 'unias', 'urbes', 
    'urdas', 'uribe', 'urnas', 'usaos', 'usate', 'useis', 'uñoso', 'vacan', 'vacas', 'vados', 'vagas', 'vagos', 'vague', 'vague', 'vagas', 'vales', 
    'valga', 'valgo', 'valsa', 'valse', 'valsa', 'valse', 'vales', 'vamos', 'vasca', 'vasos', 'vasta', 'vates', 'vayan', 'vayas', 'vayas', 'veces', 
    'veces', 'vedas', 'velas', 'velen', 'veles', 'velos', 'velas', 'veles', 'vemos', 'venas', 'vende', 'vengo', 'vengo', 'vente', 'vente', 'verde', 
    'veros', 'veras', 'veria', 'vetas', 'vetos', 'veian', 'veias', 'viaje', 'vidas', 'viene', 'viera', 'vigas', 'viles', 'vinos', 'vires', 'vivas', 
    'voces', 'volar', 'volvi', 'volas', 'votad', 'votan', 'votar', 'votas', 'voten', 'votes', 'votos', 'votas', 'votes', 'vudus', 'video', 'wikis', 
    'wones', 'yates', 'yemas', 'yemen', 'yendo', 'yenes', 'yesca', 'yogur', 'yugos', 'zacas', 'zarca', 'zares', 'zedas', 'zetas', 'zonas', 'zorro', 
    'zulus', 'zurda', 'zurro', 'acida', 'acido', 'acima', 'acimo', 'afila', 'afilo', 'ambar', 'anima', 'apoda', 'apodo', 'arabe', 'arbol', 'arida', 
    'arido', 'asate', 'atica', 'atico', 'atomo', 'atona', 'atono', 'aurea', 'aureo', 'avara', 'avaro', 'avida', 'avido', 'ebola', 'emula', 'emulo', 
    'epale', 'epica', 'epico', 'epoca', 'etica', 'etico', 'exito', 'icono', 'ignea', 'igneo', 'ñames', 'ñatas', 'ñatos', 'ñutas', 'ñutos', 'ñutas', 
    'obolo', 'ocrea', 'ohmico', 'opera', 'opimo', 'orale', 'oseas', 'oseos', 'otica', 'otico', 'ovida', 'ovido', 'ovolo', 'ujule', 'unica', 'unico', 
    'urica', 'urico', 'usate', 'usese'
]

function pickWord(){
    return Math.floor(Math.random() * 800);
}

const realWord = words[pickWord()]