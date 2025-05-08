import React from 'react'

const DocsPage = async({params}:{
  params:Promise<{slug:string}>
}) => {
  const { slug } = await params;
  return (
    <div>
      <h1>Docs page</h1>
      <p>URL Segments: {Array.isArray(slug) ? slug.join('/') : 'None'}</p>
    </div>
  )
}

export default DocsPage