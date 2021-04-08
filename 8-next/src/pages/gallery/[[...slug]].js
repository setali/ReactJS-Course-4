export default function Gallery ({ params }) {
  return <div>Catch all routes => {params.slug?.join('/')}</div>
}

export async function getServerSideProps ({ params }) {
  console.log(params)
  return {
    props: {
      params
    }
  }
}
