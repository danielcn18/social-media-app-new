"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import company_logo from "@/images/logos/gecko_logo.png";
// import search_icon from "@/images/icons/search.png";
import search_icon from "@/images/icons/search.png";
import default_profile_icon from "@/images/icons/default_profile_icon.png";

// import user_profile_icon from "";

const Page = () => {

    // slogan: Tailored Connections, Tailored for You – That's Gecko!
    return (
        <> 
            <div className={styles.navbar_main}>
                <div className={styles.navbar_logo}>
                    <Link href="/">
                        <Image 
                            src={company_logo}
                            alt="company_logo"
                            className={styles.navbar_logo}
                        />
                    </Link>
                </div>
                <div className={styles.navbar_searchbar}>
                    <input type="text" placeholder="Search" className={styles.navbar_searchbar} />
                </div>
                <div className={styles.navbar_profile}>
                    <Image className={styles.navbar_profile} src={default_profile_icon} alt="search_icon" />
                    <p className={styles.navbar_profile}>Profile</p>
                </div>
            </div>
        </>
    );
}

export default Page;