import React, { useState } from "react"
import IdentityModal, {
  useIdentityContext,
} from "react-netlify-identity-widget"
import Layout from "../components/layout"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const Login = () => {
  const identity = useIdentityContext()
  const [showDialog, setShowDialog] = useState(false)
  return (
    <Layout title="layout">
      <button type="button" onClick={() => setShowDialog(true)}>
        {identity && identity.isLoggedIn ? "Logout" : "Login"}
      </button>
      <IdentityModal
        showDialog={showDialog}
        onCloseDialog={() => setShowDialog(false)}
      />
    </Layout>
  )
}

export default Login
