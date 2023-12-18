// page.jsx could be page.js & it wouldn't make a difference b/ Next knows to read js files w/ returning html as jsx files.
// So it's simply good practice to use page.jsx & not page.js. 

// When a file marked with 'use client' is imported from a Server Component, compatible bundlers will treat the module import as a boundary between server-run and client-run code.
"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import default_profile_icon from "@/images/icons/default_profile_icon.png";
import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { HiFilm } from "react-icons/hi2";
import { BiSolidMessage } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

// Initializing Page function
const Page = () => {

    return (
        <>
            <div className={styles.contain_main}>
                <ul className={styles.sidebar_left}>
                    <li>
                        <Link href="/">
                            <AiFillHome className={styles.sidebar_left_icon} />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <MdExplore className={styles.sidebar_left_icon} />
                            <p>Explore</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <HiFilm className={styles.sidebar_left_icon} />
                            <p>Shorts</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <BiSolidMessage className={styles.sidebar_left_icon} />
                            <p>Messages</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <IoNotifications className={styles.sidebar_left_icon} />
                            <p>Notifications</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <FaPlusCircle className={styles.sidebar_left_icon} />
                            <p>Create</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <FaBookmark className={styles.sidebar_left_icon} />
                            <p>Saved</p>
                        </Link>
                    </li>
                </ul>
                <div className={styles.posts_display_main}>
                    <div className={styles.posts_display}>
                        
                    </div>
                </div>
                <div className={styles.sidebar_right}>
                    <div className={styles.friend_request_main}>
                        <div className={styles.friend_request}>
                            <div className={styles.friend_request_header}>
                                <p>Friend Request</p>
                                <Link href="/">
                                    <p>See all</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.friend_suggestion_main}>
                        <div className={styles.friend_suggestion}>
                            <div className={styles.friend_suggestion_header}>
                                <p>Friend Request</p>
                                <Link href="/">
                                    <p>See all</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

// Exporting the Page function
export default Page;