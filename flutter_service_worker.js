'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "98784ecd0e3102fc4c102416c7b70819",
".git/config": "2bfdd53946f6f50489f5f1a6e70952e5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2d01c9481387eb2b7a4bbd0d857d943d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3c003c26ea2b4837803e113e923c72c",
".git/logs/refs/heads/master": "f3c003c26ea2b4837803e113e923c72c",
".git/logs/refs/remotes/origin/master": "d2abc8d7ad14ffec945fb3a57f80a5ce",
".git/objects/03/31fe51970dbb53d9eee8e0ea865ebb8d1edc05": "23aaf1bf2240bc72360293e307285398",
".git/objects/04/ca5248decf65eacc3255c64e7912fa8713185f": "7c03d4f4afdc9ab6e2514a697bb7a994",
".git/objects/05/957d0c4f4affbeb068ab471baa6b4fb0de1437": "c6d58cd3805952824367df6e74a53e5d",
".git/objects/06/059ae247b33fcf2428d481df98302587f9738b": "5db4006926b81d7a374feee9858f1dc9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/c88757bbac52b820f584779fc4898a12cbf8f9": "777ab68328ab27d6368ed75e3900810d",
".git/objects/0b/26255cbed7ec6d7a2188f5aa3a9481fdad91a5": "52f5f481085fd8287360a10adc4798fb",
".git/objects/0f/937b0090f1c91c5b8a7450d2f025aafcdf6325": "24650f5309a6a9176145009d5776bd2c",
".git/objects/0f/a528f41fa890ea66fccc9f56f478004455af26": "328d26b04514f869299e4056529bd941",
".git/objects/15/adeabaa3485c0f2ec54adfea44c49c18fad031": "04699cd48163b3c143ab6a50065c83e5",
".git/objects/16/d44181476c465b69ca61b36d16dd57728ae14f": "45f8781ee804cc9c3c26fbf4cfcc272d",
".git/objects/19/b3f0b5533e4266f155dd551dab143442637ea0": "22a23850f1cb1b196aaf7e1a52d7347d",
".git/objects/1a/b31c3b6c0e38632494951831bb1f0180bea357": "f52da33a60d5ed8e0112874172393f8d",
".git/objects/1a/c292e01c29a70aa8a6181fb29d58a561a2b405": "fc3d3f622fab895c4e69f199c9b4eec6",
".git/objects/1d/5fb354fa26a4ca82611294af75ca34cc0483dc": "beb3aae91951fa6e8750ec5cbb1f2853",
".git/objects/22/93e2fa0f79f707c88044a014a8f763525eef92": "a30dc10ea52dbab2ee451b6b64f08906",
".git/objects/23/05a213ea0665f32a990366f5471867d0d194b0": "d7e40b31e2be77fd5a36d8f3543a4e43",
".git/objects/23/25a1a5e2b82090aeb7972297e5227f19dd9178": "74e6f218902c9c83fb427e3010441e2a",
".git/objects/23/971c77b7c2a33f84260eb7fc8822b984402fc0": "2a2419eca557ebd75eab4153ec8c12ce",
".git/objects/26/e75e6f3db188599237628ac6d85f1c66240efa": "4c2727aca492f292d315b473038903ab",
".git/objects/2f/731014eaa7a6098e55e907298e4471ece15e41": "58e20c932a49876dd52b3bf207f6f1d6",
".git/objects/33/bd47db78cd3aeebfbda01c96a25cb0306f5ce0": "c0437a8c939ce4fcf76da1ced8f7fa0f",
".git/objects/37/6880b11b11b87fbd4e30b8e9283344423627fb": "f6aafe1ac21a313ccf08f1cc7df32b3a",
".git/objects/37/b5bb842bbf5c2107f7a0470f497bd49e6ebd15": "378a3409a9676b7a0376d5bac97488e7",
".git/objects/38/e860af1a3f4906887293692131c2ed2ebfb09c": "5d5baee202cc5f145d4ade3328c08a64",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/90f5afd237b82f175e485597a29978425c864d": "e8fabaf6200779f1c5b3c14d1f635127",
".git/objects/3a/a6231402aca525dabdc3659cec5497a2b8f28c": "f2a3f214e369c32a4173a74dad1904f7",
".git/objects/3e/aee26ec4dff10f700cde5cdd6eb614c0374eb9": "24268a839b6333a10657cde951968449",
".git/objects/3e/c3f30d9592d6f2cf4e614b69bf73d56455d69c": "d917d87202557def49fb19ee29bf3ec4",
".git/objects/40/002c4357f0701957c245f4df7f1e52af1d3908": "a2c0ea1370afbdb1ade39b2f03a832ae",
".git/objects/41/ffaea773aef9a7b4e09da75a29b0fed923f4d9": "23691f9be57bfa574bea60758c044429",
".git/objects/45/a744102f3c13aa245eb1de4bb80de655de0689": "a6b76e8fb3a2a0621a30235ac911d2e4",
".git/objects/4e/46593481ac36eea17f182f56dca8d1bfe2d6eb": "5275617df9d28f1612e278c1e61e5e02",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/52/9afae215a2cc25196264e4365e8e2ed8f01aee": "fe57571160467130e02ac808124f46dc",
".git/objects/52/c68ca141b49526bfac7964523fd5097befd067": "ba4009b489d6737cc86c8553bc6e2525",
".git/objects/54/6d164f5fa5df94c4dc672496648d01e9799196": "5471a6658555b423508f8e583d9bc67c",
".git/objects/57/1b07522919cc3b97cac3b1116f29e0a413c49a": "7e410112d9d6afb9da445ba05afcd83d",
".git/objects/59/05481f5e42c1d3d479cb72b6e5ac3a041155f8": "28fb3d7eaae2388060e8c23afb21cd26",
".git/objects/59/2e02b44b30fb2089c10ce5e2ac358538902c90": "1d61f66a6b037bd0587d3cdec33e9bc6",
".git/objects/5d/7d1f90a80f3cb979f2989748ab3d2cdcd21110": "bde01ef0cfab51e8c95df9fae957c270",
".git/objects/62/443f471a43506a45948764ff70b4cb1cdefec1": "f2b4047a377c9ba2373dea68f6addaaf",
".git/objects/66/5d589acf80550f212361f1b94f69ca148f78dc": "141c6c3da8438c6a47f0dcda475696bc",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/6f2db7f8d185e7d1d1b0e6975d4db67b8903a3": "86102139b85be826f07e3dcb5e9eceee",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/31402d2e584ec289380c8466422985e10e59f1": "4b71629e367b8c4ebfdb547ac0fb65cc",
".git/objects/7a/2d093cc993f4a8422d02f0c13ce324d077a9e7": "9bdaeed17737a45e505c590447e17f69",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/d67416bfd64adf9a2ed9dbd6d1484bfa315734": "a5a66543684983e240fbcf3d845c145f",
".git/objects/81/3477724f86d17fc81ae1dccadd1bac033d5c8f": "af3af1f0bcc6be40e78c6126f1706d08",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/84/8f4d2b8c6900f4f2343813b78948bf3f231909": "404259b9413be7c378b373c99fc0e145",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/ac9b9941847e3c6700a21d38d2d7120d49579e": "3718822243f09dd015d46722cfdfc9c7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4a889df3037b52aeedd28e2729dd30dba9dc3b": "692e5517e6499636dd7ee7c59536c8e9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/e4ed6d5b58469d26a43b220ac1c196e1f2a828": "53b747bbe4d87729571d7ae3d8503884",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/783f077a8295b780028d45e18dc9115053019d": "bbe2db06ba80a70a7976cfa19b30eedf",
".git/objects/8f/a0edc9667a27e195fa7e21b0ec6c9771ce4a43": "292278aeb98e97b7335eac22cb1e53d9",
".git/objects/90/bf03be3f6d7eea626763565b2fc0b5c5251553": "51977623906415bb2e0d3af05f9df607",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/daede1cd65dea18518e52b420412a35c7c4ace": "41dd3aae38f01c569cc4695c3622c644",
".git/objects/98/1fb837db6fd036e76afbf429d8f37e563cc9fe": "06ea062db9098e87341d53c397bf66b4",
".git/objects/98/2bebafbf891b01ec9bce4e4feb74a88fd33201": "93e64d635a8d6ec4812d2dc0df4af743",
".git/objects/9d/b8321192a31283bcf757e0b4fe15600968b365": "f6c422d39b054fb42062d95105ac664a",
".git/objects/9e/04710549502bc18024d6dc3e671379421ed557": "10518dfc5947a49435ed3657fedfd35d",
".git/objects/a1/279f64749aca5dd3ec228639b9fcb66cc9fa6e": "5e555202493cdee1ce1108214a5de008",
".git/objects/a2/ea096d065be258c22761e61c4b1dfa2e54fee6": "975134220151d4ddf9586951456c3eba",
".git/objects/a2/f287dd88d4ab2712bbd51ee32723693a35a608": "d2702e187d0732193989c5178275507b",
".git/objects/a4/a0343c4cec10d5a06ae5b27f96fe397fd96c0d": "41e5d49f6ca68bfa83bcc06106ee0b1d",
".git/objects/a6/66a8d842591803a118fa53c4288f2106203f60": "d6d6e698a448d6f9d14e20902b528879",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/72d06cf1538c174faead001c46dba3e8ae16fc": "a4a74217dc6a8234f7e19b72a9d1c92a",
".git/objects/a9/af6d0b970aab8ed236ca1ae71b38923a5d953f": "e6371e4074cbdd68c73d67b72bb01816",
".git/objects/aa/db82f80635686d81b20cdb125c5f975d7915f0": "2e34a35fda8d520cea1a2b6ded376197",
".git/objects/ac/cd1c5518079feff2ce06539a7f76f9575ce509": "f0a1bfdb530e06de0e1d9842a5b7d476",
".git/objects/ad/c92bc910a239c604e559321982920a36c3cd2e": "37697a90a5d87936b61e930486e6f8a5",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/5530e7783f94218de8dfb73ac1851626f8d268": "b72c6524ed6268e69a97161f2f7e768d",
".git/objects/b0/3a0c5a878c1d03d157d302cac56ce3002270ee": "a951391666931316ae1bc5af05242f88",
".git/objects/b1/befca2046f53a1d034d314b0ae3799eaf89263": "3b373b5736fc4ad6e6cc08b658f7616b",
".git/objects/b1/df2b8444b0225eb344046598e1a610c360c396": "acee4d526bc00bddbd12b57c685025ca",
".git/objects/b4/0149aa3b0661fbd7493e7a55604b16a3861cfa": "4f023546cffd919a859a1a8d1270305d",
".git/objects/b5/c07f941d71417625031761e89f867fb61702f1": "994a8ac99ee18184a36d7dfb489ee759",
".git/objects/b6/2818cfa1873c1742239bfe4471403d8e7818a3": "aa44a93a8810eed1298ccd628186b116",
".git/objects/b6/3724f8b40c4f1e0531bd3db536e1064dbb2a44": "083462b7393d822238886fcea57b5c5b",
".git/objects/b6/b7041c8c7393b48127385a30e27bf20b8b2ae7": "73c21c5ff78decbd42d47043ca7f9aa6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1ce43d2657fc639bfa206b0283da9b369d3526": "041778c96a64a69bbb2bcc0e9f664946",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/02477366a2465f0b98bad4c4f7b760cd7e7017": "aad44fbdc3d62444f2cec91a4e6dd763",
".git/objects/c8/0296a2ae97aacd7955a99c7c0c227d3e75e190": "49256aede8d8c606842df48e4809df41",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ce/0cc71608296d8c712cd1823925b32e1d07e5f3": "13e413e857c0c068a42159b238c75f69",
".git/objects/d0/3faa64a85fb1fa432009f44e0bcd42fbf6ce03": "606d6d75188cdb699e10971f65e9ce2a",
".git/objects/d4/23290db83ac6b92a25e013003e923390b5afae": "4213024b5387432198f5500ff9cf4ea3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/718ce3df299140f40d7d2473e2da02085f84e1": "fb517f199b315065f14e85aa78bf3993",
".git/objects/dc/fe7467a8e4663cd0a7873a4e4dfcb6b86ce579": "8c421d6da0736cc421e0834289758d16",
".git/objects/dd/31c08c126e49bac65b15dc91cdbfedd0a4b28d": "bd0e5a550ba2cb02e3d5824d2df7699a",
".git/objects/df/a73290e3d287b607ab4721d0c788209c8dbf61": "c58a23df035522b2d682adc3956ee39c",
".git/objects/e0/a3dc2e0777640c00a43b3fbe75feb80ddd7f0a": "db4c3d752376cec58b8100ef7ec51f23",
".git/objects/e0/b8f5c06d0091594b00fcb7b2b3a42ae3a232d1": "17453f66c9339dc81cc6ac25171055cf",
".git/objects/e1/733b20fa4056e0d3e51c5a3e387bab01b97c75": "7a164c7200643d609f75eecef76b9091",
".git/objects/e2/0f100bbe909e689258358185acc4ca88a36def": "c856faec32ebd2db6b69a5f7ac069e35",
".git/objects/e4/1c4744510e5ad6f8abfc9068bf78c12e79d2d2": "73d45c2a66bc7ce47903a84bdae8c8bc",
".git/objects/e7/29dfe19e3ce1a676eae213dc33dedef7a00860": "762831a4a5ff6ed7f2a5c731380912a5",
".git/objects/e8/857dbb5a51049b5c3149b2b322f4e0d0002a1a": "63c286cb5901d9969cef7695b1e2df5c",
".git/objects/e8/d9a9cfd9c8a23660f57b66b7d81c1ecea90e1e": "7cb6245cb27229bc2a5fbb1693982b87",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/40c98c326d3194a4695b63df0787f3f375bd50": "d5f86204d05461af0e56008095c26f7f",
".git/objects/ee/9abe26c12ee59112a0f37b29417db9c69d2e7f": "766dc3a91126b4cae89ebb9f0ae99824",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/1258d3ac07dcf1842dae811263b2568639f819": "7b212d436ce1fb9cc7a8075d6fd56e49",
".git/objects/f7/a71b55c755ead6fb655bd2a97934fc158cb0fd": "ad11c67ef8578a11babeca7107cd1f66",
".git/objects/f8/334c19d9aa2dcf5abc2e10fbb6b087d0c7bac8": "c45628d09728796f2d95c1b8b5fadcda",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/66f6da9b508ffb1519c2ec0331a8e502696639": "013a042fca713571619b80217662adb7",
".git/refs/heads/master": "3e4e18e4f91a29e9ca23ae5c1eac2348",
".git/refs/remotes/origin/master": "3e4e18e4f91a29e9ca23ae5c1eac2348",
"assets/AssetManifest.bin": "ca581238548488b69d20b2d9f2af4af9",
"assets/AssetManifest.bin.json": "0332f1e4c90bb2f248b7c5cbc0f82918",
"assets/assets/1.webp": "fb79594510fea4ff802b074595a46171",
"assets/assets/2.png": "3602ac4f5b29151d93e207d2c28cef61",
"assets/assets/5.jpg": "14945d06987d6fadb0c317f8fd15bb75",
"assets/FontManifest.json": "2a3f09429db12146b660976774660777",
"assets/fonts/MaterialIcons-Regular.otf": "aba5c4146efb4d41ae6b8d1d569432f9",
"assets/NOTICES": "99900f58dfe2186a72a4b139392bd4a1",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "a0eaf072b0c2832c10ea1683bc821d55",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "9aa44c2d80c4baa8ca3e266dce556fbf",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "325641e8a40f4fea6975cd3355e186c5",
"/": "325641e8a40f4fea6975cd3355e186c5",
"main.dart.js": "cc32b1012e90017e5ee039ea720518ba",
"manifest.json": "e77c5166ea3d3be53a770f0346b8f072",
"version.json": "b8d368c3bc058547de453441e2379bb9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
