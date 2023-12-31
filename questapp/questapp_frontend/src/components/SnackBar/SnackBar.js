import { useState, forwardRef, useEffect } from "react"
import Stack from "@mui/material/Stack"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

function SnackBar({ text, isOpen }) {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (isOpen) {
      setOpen(true)
    } else setOpen(false)
  }, [isOpen])

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

export default SnackBar
