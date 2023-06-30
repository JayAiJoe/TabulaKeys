import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import ProductCard from '../components/productCard';

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import CarouselCard from '../components/carouselCard';
import Navbar from '../components/navbar';

TimeAgo.addDefaultLocale(en)

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


const products = [
  {
    "name":"1",
    "designer":"Team B",
    "takenUnits": 3,
    "maxUnits": 10,
    "status": 0,
    "datePublished": '2020-01-01'
  },
  {
    "name":"2",
    "designer":"INNOV8",
    "takenUnits": 7,
    "maxUnits": 10,
    "status": 1,
    "datePublished": '2020-01-01'
  },
  {
    "name":"3",
    "designer":"Team B",
    "takenUnits": 3,
    "maxUnits": 10,
    "status": 1,
    "datePublished": '2020-01-01'
  },
  {
    "name":"4",
    "designer":"INNOV8",
    "takenUnits": 7,
    "maxUnits": 10,
    "status": 2,
    "datePublished": '2020-01-01'
  },
  {
    "name":"5",
    "designer":"Team B",
    "takenUnits": 3,
    "maxUnits": 10,
    "status": 0,
    "datePublished": '2020-01-01'
  },
  {
    "name":"6",
    "designer":"INNOV8",
    "takenUnits": 7,
    "maxUnits": 10,
    "status": 2,
    "datePublished": '2020-01-01'
  }
];



export default function Home({ allPostsData }) {
  return (
    <div >
      <Navbar/>
      
      <Layout home>

        <CarouselCard products={products} labels={{'title':'Top Group Buys', 'subtitle':'Don\'t miss out! Join the latest popular group buys.'}}/>
        <CarouselCard products={products} labels={{'title':'Trending Designers', 'subtitle':'Discover new and upcoming keyboard designers.'}}/>

      </Layout>
    </div>
  );
}