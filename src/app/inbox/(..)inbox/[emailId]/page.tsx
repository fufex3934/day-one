import EmailModal from "@/app/components/EmailModal"
const Modal = async({params}:{
  params:Promise<{emailId:string}>
}) => {
  const {emailId} = await params;
  return (
    <EmailModal emailId={emailId}/>
  )
}

export default Modal