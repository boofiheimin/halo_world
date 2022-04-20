import Card from '../components/Card'
import Masonry from 'react-masonry-css'

// import { yoshi_sampler } from '../helper/sampler'

// const sampleYoshi = yoshi_sampler(1)

const response = [
  {
    name: 'Yukikaze Kai',
    countryCode: 'PHL',
    country: 'Philippines',
    city: '-',
    message:
      'Kanata we missed you so much!! great to see you are recovering and doing well now, all of us are excited to see you back',
    imgSrc: '',
  },
  {
    name: 'Zach',
    countryCode: 'USA',
    country: 'United States',
    city: 'Denver',
    message:
      'Happy birthday Kanataso!!! I’m really glad to see you streaming again and back to good health! I hope you have a great day!',
    imgSrc: '',
  },
  {
    name: 'Jami',
    countryCode: 'FIN',
    country: 'Finland',
    city: '',
    message:
      'I wish you a happy birthday Kanata and all the best from Finland!',
    imgSrc: '',
  },
  {
    name: 'Penta',
    countryCode: 'USA',
    country: 'United States',
    city: '',
    message:
      'Happy birthday kanata! Thank you for all the fun streams and amazing concerts and covers. You are like a beacon of light in this world!',
    imgSrc: '',
  },
  {
    name: 'NinjaTang',
    countryCode: 'AUS',
    country: 'Australia',
    city: '',
    message: 'Happy birthday kanata',
    imgSrc: '',
  },
  {
    name: 'Titus',
    countryCode: 'SGP',
    country: 'Singapore',
    city: 'Singapore',
    message:
      'HAPPY BIRTHDAY MY GORILLA I just want to say\nKeep on making our lives happy and we will make yours happy too',
    imgSrc: '',
  },
  {
    name: 'xinmike221',
    countryCode: 'HKG',
    country: 'Hong Kong',
    city: '',
    message:
      'かなたん、お誕生日おめでとう!!あなたの配信に感謝します、あなたの配信はいつも私に幸せをもたらします、私はあなたがすべて良くていつも幸せであることを望みます！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=13D87J9MSFyac0NYUcDnsxkyfNRTnmdwe',
  },
  {
    name: 'HijnZ',
    countryCode: 'VNM',
    country: 'Vietnam',
    city: 'Ho Chi Minh',
    message:
      'Happy birthday Kanatan!! \nWish you have a good health and achieve your goal career!!!',
    imgSrc: '',
  },
  {
    name: 'kiosy',
    countryCode: '',
    country: '-',
    city: '',
    message: 'Happy BIrthday Kanata! Stay strong and we wish you good health!',
    imgSrc: '',
  },
  {
    name: 'Yeo Zong Han',
    countryCode: 'SGP',
    country: 'Singapore',
    city: '',
    message:
      'Happy birthday Kanata! May you be blessed for the year ahead, 来年は仲良くしよう~',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1cYLbDNK8V_neNXwpedCPiVQn0h43wpYh',
  },
  {
    name: 'Nico',
    countryCode: 'USA',
    country: 'United States',
    city: 'Chicago',
    message:
      'おーす！かなたんが好きだからお誕生日おめでとう！本当に好き！ありがとうね！',
    imgSrc: '',
  },
  {
    name: 'Diego J Mieles Jr',
    countryCode: 'USA',
    country: 'United States',
    city: '',
    message:
      'I might have just join but I know you are a great singer, great streamer, and you help put a smile on this fan, that I want say thank you',
    imgSrc: '',
  },
  {
    name: 'MalikMistyRory',
    countryCode: 'USA',
    country: 'United States',
    city: 'Chicago',
    message: 'Happy Birthday Persistently Progressing Tenshi',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1yJ95AtlubU3JQ61eGl5Jcci2XAWmKEt2',
  },
  {
    name: 'Panchan772',
    countryCode: 'USA',
    country: 'United States',
    city: 'Florida',
    message: 'Happy Birthday Kanatan!! 💙💫',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1_9ajhvT_V3wF1DEUvzmnByXe99FXuq3p',
  },
  {
    name: 'Azyrn',
    countryCode: '',
    country: '-',
    city: '',
    message: '誕生日おめでとう!!!⭐',
    imgSrc: '',
  },
  {
    name: 'Mantas',
    countryCode: 'LTU',
    country: 'Lithuania',
    city: '',
    message:
      'Happiest birthday to our sweet Tenshi! We are blessed to have such an amazing and hard working girl making our days so much brighter',
    imgSrc: '',
  },
  {
    name: 'ウカシャ',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: '',
    message:
      'こんかなた！お誕生日おめでとうございます！いつもへい民に愛して頑張ってし可愛いし面白いし色々事上手くて笑顔くれてありがとうございました。僕の人生の空白を埋めることを望んでいたのですがかなたは正にそれをやってのけたのです。本当にありがとう！かなたん大好き！これからも応援してます！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1uFTCo6bRTsc8_fqcVxsA-FUGKiwVVE9E',
  },
  {
    name: 'Kazento',
    countryCode: 'VNM',
    country: 'Vietnam',
    city: 'Ho Chi Minh City',
    message:
      'Happy birthday Kanata!\n\nLocation: Thu Thiem Bridge with the Bitexco Tower in sight with the acrylic block',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1sbWjv11ZvRxtvSGZdRXnzpDK-w4XRgAO',
  },
  {
    name: 'TEt',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message:
      "Happy Birthday Kanata! I'll need to serve the army soon, but I'll always be supporting you and looking forward to seeing you on stage again!",
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1E7p18JE0yfrOdMPdFppmcfqkuZaRum_E',
  },
  {
    name: 'Jason Terry',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: '',
    message: 'Happy birthday Kanata! Wishing you a happy and healthy life!',
    imgSrc: '',
  },
  {
    name: 'ybz612',
    countryCode: '',
    country: '-',
    city: 'Kaohsiung',
    message: 'かなたんーお誕生日おめでとうー素敵な一年に一緒にしようー',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1fR7iW8dNgZ_9Jgc6947ED386-3vL3MhS',
  },
  {
    name: 'クロカミ',
    countryCode: 'IDN',
    country: 'Indonesia',
    city: '',
    message:
      'かなたん、お誕生日おめでとうございます！ついにお酒が飲める年になりましたね。かなたんが気になってたほろよいも買ってきましたから、今度お酒を飲んでみたいという時はぜひ私もお供します。改めてお誕生日おめでとうございます、これからもよろしくお願いします。',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1guwL-VfH4GOMB7Yi4CBobr32HpTmzMmv',
  },
  {
    name: 'CatMillennium',
    countryCode: 'GBR',
    country: 'United Kingdom',
    city: '',
    message:
      'Happy Birthday Kanata! Watching and listening to Kanata always makes me smile. I hope you have a pleasant birthday!',
    imgSrc: '',
  },
  {
    name: 'Greenapples',
    countryCode: 'GBR',
    country: 'United Kingdom',
    city: 'Belfast',
    message: 'Happy birthday Kanata! Hope you have a wonderful day!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1EhoOTolP26LDCpeowrjbb_ajsSbpvuBm',
  },
  {
    name: 'BeanBun',
    countryCode: 'GBR',
    country: 'United Kingdom',
    city: '',
    message:
      'Kanatan! Happy Birthday and welcome back! Much love from the United Kingdom, I hope this birthday is the best one to date.',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1qBW5vCbKPCG4Q_lIFzRgX13DCn2v1A60',
  },
  {
    name: 'Scinnergoldy',
    countryCode: 'THA',
    country: 'Thailand',
    city: 'Krabi',
    message:
      'Happy birthday kanata! Meeting you was the most wonderful that has happened to me in life. Wishing you the happiest. Fly high!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1nFwEGsF8WBY87BQWoA30Om2cxT8JJPfK',
  },
  {
    name: 'レテイ',
    countryCode: 'JPN',
    country: 'Japan',
    city: '福井県',
    message:
      'ハッピーバースデー！かなたん、誕生日おめでとう！\nいつもかなたんの笑顔や笑い声に癒されてるよ！本当にありがとう！\n今年も一年、いい年にしようね！！',
    imgSrc: '',
  },
  {
    name: 'タスク',
    countryCode: 'JPN',
    country: 'Japan',
    city: '',
    message: 'かなたん誕生日おめでとう!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1H9hIWU8wufF_JMRxF_htAds-jaerxTd5',
  },
  {
    name: 'Jeon Seyeong',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Gyonggido',
    message: 'おかえり',
    imgSrc: '',
  },
  {
    name: 'Wasabi',
    countryCode: 'VNM',
    country: 'Vietnam',
    city: 'Ho Chi Minh',
    message: 'Hei! Happy Birthday Kanatan!! Wishing you all the best luck!!!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1UH3kdiBLgJn3aldHyFTkVwTk_q00U54K',
  },
  {
    name: 'HaruTheVtuber',
    countryCode: '',
    country: '-',
    city: '',
    message:
      'Happy Birthday Kanata!! 🎉🎉✨✨  \nI wish you the biggest slice of happiness today.',
    imgSrc: '',
  },
  {
    name: 'Jinwoo',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Soul',
    message:
      '帰ってきたのを歓迎するよ！ かなたんが帰ってきて本当にうれしいです。 また楽しく一緒に遊びましょう！',
    imgSrc: '',
  },
  {
    name: 'erieri',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message: 'Kanata always broadcast in a bright and healthy way',
    imgSrc: '',
  },
  {
    name: '리리컬 (リリカル)',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'SEOUL',
    message:
      '韓国で応援しているへい民です。\nへい民になってまだ10ヶ月しか経ってないですが\nこれからもずっと応援します。\n\nハッピーバースデー！ かなたん！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1FgjtrVjrcEKG28nVK7APbapO0J3v5Jjc',
  },
  {
    name: 'Goka(ゴカ)',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message:
      'かなたん！お誕生日おめでとう！かなたんを去年の５月から見てきた韓国のへい民です！グッズがまだきていませんのでこうやってお祝いのメッセージだけ贈りますことなんかごめんなさい。去年からかなたんを切り抜きしながら日本語を勉強できてかなたんに本当にありがとう！これからもずっと大好きだよ！',
    imgSrc: '',
  },
  {
    name: 'ウエマム / 웨맘',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Osan',
    message:
      'かなたんお誕生日おめでとう~ピョンミン同士の誕生日サプライズってメッセージも残します。ぜひ韓国でも奏多を応援しているファンがいることを分かってほしいです。かなたん好き、、😊(グッズではないけど絵は直接コミッション入れました！)',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=19Mjt6GIMmt5aokFDbeYS38DNWqTmwqnj',
  },
  {
    name: 'Ppang',
    countryCode: 'IDN',
    country: 'Indonesia',
    city: 'Jakarta',
    message:
      'Happy 20th Birthday Kanatan!! Have you heard of Elden Ring? I really want to see kanata play that so I hope you can play that in the future.',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1LUFXyYWMDhmZc7yuhMgfRxvTHcirc6zr',
  },
  {
    name: 'Naseul',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Jeju',
    message:
      'プリンターがないので紙模型写真は撮れませんがそれでもメッセージだけ残します お誕生日おめでとうかなたん！！ 、私が描いたファンアートとかRTしてね。とても嬉しくていつも楽しく作業してるよ！ 私も頑張って絵を描くから、あなたも復帰して熱心に頑張ってほしい!\n韓国でいつも応援するよ！',
    imgSrc: '',
  },
  {
    name: 'SangChun',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Iksan',
    message:
      'こんかなた！ 韓国に住むヘい民です。 今回、誕生日のお祝いプロジェクトを行うメジェシを残しておきます。 いつも応援しており、いつも笑顔の姿を見せてほしい！',
    imgSrc: '',
  },
  {
    name: '05년생 홀로팬',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'KON KANATA!!!! 韓国平民です！かなたを知った時、かなたがcovidにかかって残念でした。お誕生日おめでとうございます。早く良くて放送で会いましょう！ 変力器を使っておかしいかもしれません。韓国ピョンミン',
    imgSrc: '',
  },
  {
    name: 'Park sae min',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message:
      '카나타 짱 생일축하해♡ 한국에서도 홀로라이브 엑스포가 열리는날을 기대하고있을게!\nかなたちゃん誕生日おめでとう♡韓国でもホロライブエキスポが開かれる日を楽しみにしてるよ！',
    imgSrc: '',
  },
  {
    name: '카나타 노 보잉보잉 탄죠비 오메데토',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      '初めに奏多の放送を見た時は淡々としてたけど奏多が歌う姿を見て惚れてしまった。奏多のすべての歌が私の好みで奏多の歌で慰められたりして天使の声を持ってるから奏多が天使のようなのでこれからもきれいな歌期待してるよ。誕生日おめでとうカナタン！💖',
    imgSrc: '',
  },
  {
    name: 'Rachel',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      '私たちの永遠の天使ゴリラの誕生日を祝います。 たとえ私が日本語を話せずに翻訳機の力を借りるが、ファン心は日本ファンに全く押されていません。 I love gori...kanata!!!',
    imgSrc: '',
  },
  {
    name: 'Leechanu',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'seoul',
    message:
      'お誕生日おめでとう。いつもありがとう。これからもずっと頑張ってね。-kr heimin',
    imgSrc: '',
  },
  {
    name: '포도맛 치킨',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'コンカナータ!!カナタを見たばかりなのにこの前誕生日には会えなくて残念でしたが今回の誕生日には会えて嬉しいです。 ひとりライブに来て3番目のお誕生日おめでとうございます！！ 愛してるよ！！（翻訳機を使ったものなのでぎこちないかもしれません）',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1rhNcN_Sui4LREOfMJ3M6t3p7K7mYhD51',
  },
  {
    name: '검은 침묵',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'こんにちは 韓国のへい民ですいつも疲れたはずなのに放送してくれてありがとういつも疲れたはずなのにあきらめなくてありがとうみんなに 笑顔をくれてありがとうこの世に生まれてくれてありがとうこのすべてがただありがたいだけです お誕生日おめでとうございますand사랑해요카나땅!\n黒い沈黙',
    imgSrc: '',
  },
  {
    name: 'べジュンウ',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '韓国のソウル',
    message:
      '天音かなたさん誕生日本当におめでとうございます。これからもじずっと応援します。頑張ってください。',
    imgSrc: '',
  },
  {
    name: 'potato',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      '最近コロナや色んな健康問題で身も心もすごく辛いと思うけど、何も完璧である必要はないと思う。\n私たちはどんなかなたんでも大好きだから、元気に笑う姿を見せて欲しい',
    imgSrc: '',
  },
  {
    name: 'Zaptros',
    countryCode: 'SGP',
    country: 'Singapore',
    city: 'Singapore',
    message:
      "Happy birthday Kanata! I really enjoy your streams and singing and I'll always look forward to them!",
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1IBZCnlyegRgT6X4aTFSOtW_fKKTxe8QB',
  },
  {
    name: 'Hyun jun lee',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message: 'Tanjobi ometeto',
    imgSrc: '',
  },
  {
    name: 'sc',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message: '天音かなたさん お誕生日 おめでとう ございます',
    imgSrc: '',
  },
  {
    name: '카페인퓨즈(cafeinfuse)',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'こんかなた！僕は昨年人生でいちばんつらい時に天音かなたをしることになりました。つらいはずなのにいつもかわいい、おもしろい、かっこいい、やさしい、すがたをみせてぐれよにがんばってぐれてありがとうごじます。そんなかなたそがおしで幸せです。いつも応援します。',
    imgSrc: '',
  },
  {
    name: 'あお',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'かなたん、誕生日おめでとう！ いつもかなたんの配信を見て元気をもらっています。 何事も真面目に向き合って努力するかなたんがみんなに愛されるのは当然です。 これからもかなたんがいっぱい愛されていっぱい幸せになりますように！(普段グッズを買う機会がないのは悲しいです)',
    imgSrc: '',
  },
  {
    name: 'Juu P',
    countryCode: 'TWN',
    country: 'Taiwan',
    city: 'Taipei',
    message: 'たそそそそそそそそそそそ\nお誕生日おめでとう！\n愛してます！！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=14mpfwFgoH_66vHB0epnw6d0H4-rOyrHM',
  },
  {
    name: '채승훈蔡承勳',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message:
      '韓国に住んでいる「蔡承勳」といいます。日本語は分かりませんが、作業中に金田荘放送を聴きながら大きな力を得たりします。カナタッソの今回の誕生日に限りは、カナタッソが私たち全員から力を得ていってほしいです。いつもありがとうございます。健康にしてください。',
    imgSrc: '',
  },
  {
    name: 'Dent',
    countryCode: 'USA',
    country: 'United States',
    city: 'Los Angeles',
    message:
      'かなたん、お誕生日おめでとうございます！これからも応援しています！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1Be_DjLB91Jr3CxmqgmoIT9gsdFTDMYX9',
  },
  {
    name: 'アベル',
    countryCode: 'HKG',
    country: 'Hong Kong',
    city: '',
    message:
      '誕生日おめでとう!(I am still learning Japanese so I can only say some simple sentences 😅)(Btw, I really love your songs :D)',
    imgSrc: '',
  },
  {
    name: 'Reverie Neko',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: 'Cat City',
    message:
      'かなたんお誕生日おめでとう〜\n人生には浮き沈みがありますが、かなたんは常に真正面から向き合うことは本当に尊敬ます。 これからもがんばってね！！ ずっと応援する！',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1sbpMffoOKoSYaI_wHiyL-Fm_TuUhHcr1',
  },
  {
    name: 'Deffdapp',
    countryCode: 'CHE',
    country: 'Switzerland',
    city: 'Zürich・チューリッヒ',
    message:
      'お誕生日おめでとうございます！かなたんのいつでも一生懸命頑張るところがすごく好きで、尊敬しています。かなたんの歌、ツッコミ、優しさすべて好きです。日本語の勉強のため視聴者になって、もうかなりかなたんのマシンガントークに慣れてきた！スイスからの挨拶、alles Gueti!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1qe1rvkXb8rvTg_GcWTI8m77qc2HRy4VY',
  },
  {
    name: 'ali alkhalifah',
    countryCode: 'SAU',
    country: 'Saudi Arabia',
    city: 'riyadh',
    message:
      "HAPPY BIRTHDAY KANATA!!! thank you for your continuous hardworking, we'll always support you forever <3",
    imgSrc: '',
  },
  {
    name: 'valshia a.k.a. ryookera',
    countryCode: 'JPN',
    country: 'Japan',
    city: 'Chiba',
    message:
      'かなたん誕生日おめでとう！！僕がホロライブを知ってから初めてのかなたんの誕生日を、こうしてお祝いできてとっても嬉しく思います。今年は本当に大変な1年ですが、めげずに頑張ってください！最近千葉に引っ越したので、千葉の有名な球場で撮ってみました。あれ……これ実質かなマリでは……？',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1RvGy15Vjpbdk5ValSGTlQqNhIY6_5gS5',
  },
  {
    name: 'Ice - Tio',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'かなたんお誕生日おめでとうこざいます!!! 3rd Fes めっちゃかっこよかったてす!! Kanata Maji Tenshi!!!!!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1SiawwoKu04WbwNJwTx5gtM_YWUYOB0YN',
  },
  {
    name: 'Alvis Flame',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: '',
    message:
      'Hello Kanata, i may not understand japanese well but i hope that you are fine. We fans wish you a happy birthday!',
    imgSrc: '',
  },
  {
    name: 'Ben R',
    countryCode: 'SLV',
    country: 'El Salvador',
    city: 'San Salvador',
    message:
      "Happy Birthday Kanatan!!! You're really an admirable person and I wish you the best, I will continue supporting you!",
    imgSrc: '',
  },
  {
    name: 'Hatsy Rei',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: 'Penang',
    message:
      'May you and the ones you love be safe, healthy and happy. Your smile brings light to every corner of the world. Happy birthday!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1tZGmxqiUpGQFCdqsQuvcOOxLNGOen9_Y',
  },
  {
    name: 'Maxim',
    countryCode: 'RUS',
    country: 'Russia',
    city: '',
    message: 'Happy Birthday Kanata-chan!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1XEGH08nfcrsnB1xFUuW7R8QP24O6MwOQ',
  },
  {
    name: '輝く翼',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '仁川広域市',
    message:
      '2回目の誕生日おめでとういろいろ良いことも良くないことも多かったけど\n今後も面白くてエキサイティングで活発に放送するカナタを見たい今後はずっと元気に放送しましょう。ここまで来て本当にお疲れ様でした。あなたを見つめる輝く翼',
    imgSrc: '',
  },
  {
    name: '문재욱(Moon JeaUk)',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message:
      'お誕生日おめでとうございます\nいつも放送を見ながらヒーリングしてます。\n辛くて痛いことがあっても私たちを忘れないでくれてありがとうございます。\nいつも元気で幸せになってほしいです。\n翻訳機を使って単語や文章がぎこちないかもしれません。 ご了承ください。',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1FmJ-1QmEk9v4BLqYQ2BlJgALvhdMZEnu',
  },
  {
    name: 'beak jeaheok',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'かなたのお誕生日おめでとうございます。 これからもずっと面白い放送でお会いできることを期待します。 お大事に. \nかなゴリの成長が止まらない！',
    imgSrc: '',
  },
  {
    name: '노란문어',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message: '誕生日おめでとう',
    imgSrc: '',
  },
  {
    name: 'saminlion',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'Happy B-Day Kanata\nI hope you have wonderful day today.\nWhen we look up sky, you will be there.\nWhen You look down we will always be there.',
    imgSrc: '',
  },
  {
    name: 'QwAzXyVi(クアーズ)',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'こんかなた！ 韓国に住んでいるヘイ民です。\nかなたその誕生日おめでとう！\n最近、かなたに大変なことが多いようで心配です。\n私も大変な時にカナタの放送見ながら頑張れたからこの短い手紙でもカナタに少しでも力になれたらいいな。いつも応援してるから頑張ってるよ！\n*Google翻訳の使用',
    imgSrc: '',
  },
  {
    name: '박종호[Park Jong Ho]',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      '奏多お誕生日おめでとう!! これからももっと熱心に放送してくれることを願うよ!',
    imgSrc: '',
  },
  {
    name: 'Raiko',
    countryCode: 'NLD',
    country: 'Netherlands',
    city: '',
    message: 'Happy Birthday Kanata!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1y38Qd6EnFZAG3ddi4GM1KTvPUTV0662C',
  },
  {
    name: 'elfratar',
    countryCode: 'AUS',
    country: 'Australia',
    city: '',
    message:
      "Happy Birthday, Kanata! これからの人生が幸せであふれますように。\nLet's drink alcohol to celebrate Kanata turning 20! 🥳",
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1FYH-qeSVNYZ3QcW2n8wNpgoJ57p0RtrW',
  },
  {
    name: 'Aceofspades',
    countryCode: 'USA',
    country: 'United States',
    city: '',
    message:
      "Happy Birthday Kanata! Another year towards G-cup growth! I hope things get better from here, you deserve it. You're singing is angelic. <3",
    imgSrc: '',
  },
  {
    name: 'Hei',
    countryCode: 'HKG',
    country: 'Hong Kong',
    city: 'Tsim Sha Tsui',
    message: '誕生日おめでとう！！\nこれからも応援します！\nPPTenshi大好き',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1HzgLkeMYLQN80PFGlZVzdtniKGag0Ek6',
  },
  {
    name: 'HWA_TAE',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message: '愛してる！！',
    imgSrc: '',
  },
  {
    name: '@ElGachaJ, @GalaxyTetra',
    countryCode: 'PHL',
    country: 'Philippines',
    city: 'Sorsogon',
    message: 'Happy Birthday Kanata!',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1i0Y81-VcYHWhXS9x6-T4O2FHY1DemUNW',
  },
  {
    name: 'つきしい',
    countryCode: 'MYS',
    country: 'Malaysia',
    city: '',
    message:
      'Happy Birthday Kanata!!!かなたん誕生日おめでとう、今年で20歳になりましたね\nかなたんいままでの成長はとても素晴らしいと思います\nかなたはファンのへい民たくさんあるだから、もっと自信出して良いよ\nこれからもいっぱい応援するので、楽しい思い出いっぱい作ろうね',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1E8sBrqXh4a9VoznLHcIPToJE1I4er3KD',
  },
  {
    name: 'Meri',
    countryCode: 'PHL',
    country: 'Philippines',
    city: 'Quezon City',
    message:
      'Happy Birthday Kanatan!! Thank you for always bringing happiness to us. You will always be our PPT, our Perfect Precious Tenshi.',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1lKfDaTwuo_RPh5MRWvLhsakY_tISjmTe',
  },
  {
    name: 'にゅにゅ',
    countryCode: 'JPN',
    country: 'Japan',
    city: '兵庫県神戸市',
    message:
      'かなたんお誕生日おめでとうございます！！\nついに２０歳ですね\nお酒を飲める年齢ということで、晩酌配信を楽しみにしています！\n(自分はお酒あまり飲めませんが…)',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=17iqsEBH0qK3rsfUyhv_e6UckI43CQeMz',
  },
  {
    name: 'jeawonkim',
    countryCode: 'KOR',
    country: 'South Korea',
    city: 'Seoul',
    message: 'Kanata一生幸せで元気でね！ お誕生日おめでとう',
    imgSrc: '',
  },
  {
    name: 'Honsia/혼시아',
    countryCode: 'KOR',
    country: 'South Korea',
    city: '',
    message:
      'こんかなた! お誕生日おめでとうございます! かなたが大好きな韓國のへい民です。いつも放送で元気を受けてくれてありがとうございます。これからも頑張るかなたをずっと応援しています! 사랑해요!(大好き!)',
    imgSrc:
      'https://drive.google.com/uc?export=view&id=1VCf4BnmAPPiFQ7J6ILRFhJVc8gOqjkLr',
  },
]

const breakpointColumnsObj = {
  default: 4,
  1400: 3,
  1000: 2,
  700: 1,
}

export default function Home() {
  return (
    <div className="flex flex-col items-center p-2 pt-10">
      <div className="mb-8 w-full max-w-xl">
        <div className="p-2 text-center text-3xl font-bold text-white drop-shadow-xl">
          HALO WORLD PROJECT 💫
        </div>
        <div className="text-center italic text-white">
          collected from heimin all over the world to celebrate Amane Kanata
          Birthday!
        </div>
      </div>
      <div className="flex h-full w-full justify-center">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {response.map((response, i) => (
            <Card response={response} key={`${i}_${response.name}`} />
          ))}
        </Masonry>
      </div>
    </div>
  )
}
