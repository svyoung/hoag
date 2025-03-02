"use client"
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useQuery } from "@apollo/client";
import Header from "./components/Header";
import DoctorSearchBar from "./components/DoctorSearchBar";
import { DoctorList } from "./components/Doctor/DoctorList";
import { GET_DOCTORS, FILTER_DOCTORS } from "./api/graphql/queries";
import { useDebounce } from "./utils/useDebounce";

const Home = () => {
  const filter = {};
  const { data, error, loading } = useQuery(FILTER_DOCTORS, {
    variables: { filter },
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });

  console.log("dsfsdfd", process.env.MONGODB_URI);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <DoctorSearchBar onSearch={() => {}} />
        {loading && <p>Loading...</p>}
        {data?.doctors &&
          <section className={styles.resultWrapper}>
            <DoctorList doctors={data.doctors} />
          </section>
        }
      </main>
    </div>
  );
}

export default Home;