import axios from "axios"
import { useState, useEffect } from "react"

const initialForm = {
  title: '',
  author: ''
}

export default function App () {
  const [articles, setArticles] = useState([])
  const [formInput, setFormInput] = useState({ ...initialForm })

  const isEditing = formInput.id

  async function getArticles () {
    const result = await axios.get('http://localhost:3000/articles')
    setArticles(result.data)
  }

  function handleInput (evt, inputName) {
    setFormInput({ ...formInput, [inputName]: evt.target.value })
  }

  async function handleSubmit (evt) {
    evt.preventDefault()

    if (isEditing) {
      await axios.put(`http://localhost:3000/articles/${formInput.id}`, formInput)
    } else {
      await axios.post('http://localhost:3000/articles', formInput)
    }

    getArticles()
    setFormInput({ ...initialForm })
  }

  function prepareEdit (article) {
    setFormInput({ ...article })
  }

  async function deleteArticle (id) {
    await axios.delete(`http://localhost:3000/articles/${id}`)
    getArticles()
  }

  useEffect(() => {
    getArticles()
  }, [])

  return <>
    <h1>Daftar Artikel</h1>

    <table border="1" width="100%">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Author</th>
          <th>Opsi</th>
        </tr>
      </thead>
      <tbody>
        {articles.map(article =>
          <tr key={article.id}>
            <td>{article.title}</td>
            <td>{article.author}</td>
            <td>
              <button onClick={() => prepareEdit(article)}>Edit</button>
              <button onClick={() => deleteArticle(article.id)}>Hapus</button>
            </td>
          </tr>
        )}
      </tbody>
    </table>

    <br /><hr /><br />

    <h1>Form Artikel</h1>

    <form onSubmit={handleSubmit}>
      <label>
        Judul: <br />
        <input type="text" value={formInput.title} onChange={evt => handleInput(evt, 'title')} />
      </label>

      <br /><br />

      <label>
        Penulis: <br />
        <input type="text" value={formInput.author} onChange={evt => handleInput(evt, 'author')} />
      </label>

      <br /><br />

      <button>
        submit
      </button>
    </form>
  </>
}