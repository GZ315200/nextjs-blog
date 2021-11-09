

import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css'
import styles from './layout.module.css'

const API = "https://api.github.com/users/GZ315200";
// const request = (url) => axios.get(url).then(res => res.data)
const request = (url) => axios({ 'url': url, 'method': 'GET' }).then(res => res.data)

export default function Profile() {
    const { data, error } = useSWR(API, request)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return (
        <div className={styles.container}>
            <h1>{"My Profile"}</h1>
            <section>
                <a href={"https://api.github.com/users/GZ315200/followers"}>
                    <p className={utilStyles.lightText}>followers: {data.followers} 🎉 </p>
                </a>
                <a href={"https://api.github.com/users/GZ315200/following"}>
                    <p className={utilStyles.lightText}>following: {data.following} 🎉</p>
                </a>
            </section>
        </div>
    )
}
