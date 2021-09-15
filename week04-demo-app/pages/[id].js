import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

//import Image from 'next/image';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
     <img className="card-img-top img-fluid" src={'images/product/thumbnail/' + itemData.img}/>
        <div className="card-body">
          <h5 className="card-title">{itemData.name}</h5>
          <h4 className="card-subtitle mb-2">${itemData.price}</h4>
          <p className="card-text">{itemData.description}</p>
          Contact: <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
        </div>
      </article>
    </Layout>
  );
}

//      <img className="card-img-top img-fluid" src={'images/product/thumbnail/' + itemData.img}/>


//<Image src={'/images/product/thumbnail/' + itemData.img} 
    // width={450} height={300} className="card-img-top img-fluid"/>