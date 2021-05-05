import './App.css';
import Article from './component/Article'
import LayOut from './component/Layout';
function App() {
  const articles = [
    {
      id: 1,
      title: "How to JavaScript",
      body: "lorem ipsum etc",
    },
    {
      id: 2,
      title: "How to Typescript",
      body: "lorem ipsum etc",
    },
    {
      id: 3,
      title: "How to React",
      body: "lorem ipsum etc",
    },
  ];
  return (
     <LayOut> 
      <h1
      style = {{
        textAlign: "center",
        color: 'steelblue'
    }}
      >Articles Details</h1>
     {articles.map((article) => {
       return <Article key={article.id} title = {article.title} body = {article.body} />
     })}
     </LayOut>
        );
}

export default App;
