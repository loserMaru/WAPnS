import React, { useState, useEffect } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import "./styles/App.css"
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount } from "./utils/pages";
import Pagination from "./components/UI/pagination/Pagination";
import usePagination from './hooks/usePagination';


function App() {
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [posts, setPosts] = useState([])
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    // const [totalCount, setTotalCount] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const pagesArray = usePagination(totalPages);

    console.log(pagesArray)

    const [fetching, isLoading, postError] = useFetching(async (limit, page) => {

        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })
    useEffect(() => { fetching(limit, page) }, []) // [page]
    const changePage = (page) => {
        setPage(page)
        fetching(limit, page)
    }
    return (
        <div className="App">
            <hr style={{ margin: "15px 0" }} />
            <MyButton onClick={() => setModal(true)}>Создать пост </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm createPost={createPost} />
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter} />
            {
                postError && <h1>Error ${postError}</h1>
            }
            {
                isLoading
                    ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                    : <PostList deletePost={deletePost} posts={sortedAndSearchedPosts} title="Посты про JS" />

            }
            <Pagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}
            />
        </div>
    )
}
export default App;
