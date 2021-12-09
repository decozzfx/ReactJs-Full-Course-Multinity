const root = document.querySelector('#root'); // select as render place      

function App() {
  const [news, setNews] = React.useState([]); // karena hasil data fetch adalah data array

  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    getData(); // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs') // proses request fetch data
    // .then((res) => {
    //     return res.json() // proses pengambilan data json dari api
    // }).then((res) => {
    //     console.info(res) // hasil data json 
    // })
  }, []);

  const getData = async () => {
    const req = await fetch('https://api.spaceflightnewsapi.net/v3/blogs'); // await akan melanjutkan proses setelah hasil dari proses req adalah resolve atau reject 

    const res = await req.json();
    setNews(res); // await menunggu hasil data json sampai selesai baru di respon

    setLoading(false);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Fetch Data"), loading ? /*#__PURE__*/React.createElement("i", null, "Loading.....") : /*#__PURE__*/React.createElement("ul", null, news.map(item => /*#__PURE__*/React.createElement("li", {
    key: item.id
  }, item.title))));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root); // Render via React DOM atleast need 2 parameter(<lement>, <init targer element>)
// merender object menjadi dom node , kemudian di append ke root