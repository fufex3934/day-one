
const DynamicPage = async({params}:{
  params:Promise<{slug:string}>
}) => {
  const {slug}  = await params;
  return (
    <div>
      <h1>Blog post:{slug}</h1>
    </div>
  )
}

export default DynamicPage