// page.jsx could be page.js & it wouldn't make a difference b/ Next knows to read js files w/ returning html as jsx files.
// So it's simply good practice to use page.jsx & not page.js. 

// When a file marked with 'use client' is imported from a Server Component, compatible bundlers will treat the module import as a boundary between server-run and client-run code.
"use client"

import Image from "next/image";
import styles from "./page.module.css";
import default_profile_icon from "@/images/icons/default_profile_icon.png"

// Initializing Page function
const Page = () => {

    return (
        <>
            <div className={styles.contain_main}>
                <ul className={styles.sidebar}>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Home</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Explore</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Reels</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Messages</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Notifications</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>Create</p>
                    </li>
                    <li>
                        <Image className={styles.sidebar} src={default_profile_icon} /> 
                        <p>More</p>
                    </li>
                </ul>
                <div>

                </div>
                <div>

                </div>
            </div>
        </>
    );
}

// Exporting the Page function
export default Page;