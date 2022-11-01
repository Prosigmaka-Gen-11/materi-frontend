import { createContext, useContext, useState } from "react"

const ArticleContext = createContext()

function ArticleProvider({ children }) {
  const [articles, setArticles] = useState([])

  return <ArticleContext.Provider value={{
    articles,
    setArticles
  }}>
    {children}
  </ArticleContext.Provider>
}

function List () {
  const { articles } = useContext(ArticleContext)
  return <>
    <h1>ini list</h1>
    <ul>
      {articles.map(article =>
        <li>{article.title} | {article.author}</li>
      )}
    </ul>
  </>
}

function Form () {
  const { articles, setArticles } = useContext(ArticleContext)

  function masukinKeArticleContext () {
    setArticles([
      ...articles,
      {
        title: 'Biografi Bambang',
        author: 'Bambang'
      }
    ])
  }

  return <>
    <h1>ini form</h1>
    <button onClick={masukinKeArticleContext}>
      Submit
    </button>
  </>
}

export default function App () {
  return <>
    <ArticleProvider>
      <List />

      <br /><hr /><br />

      <Form />
    </ArticleProvider>
  </>
}