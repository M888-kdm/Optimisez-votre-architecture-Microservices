import styles from '../auth.module.css'

export default function LoginPageLayout({
    children,
  }: {
    children: React.ReactNode
  }){

    return(
        <div className={`${styles.row} row mx-0`}>
            <div className="w-50 h-100 d-flex align-items-center justify-content-center">
                {children}
            </div>
            <div className="w-50 h-100 bg-dark px-0">
              <img className={`${styles.img} img img-fluid`} src='https://u7q2x7c9.stackpathcdn.com/photos/28/53/406870_3175_XL.jpg'/>
            </div>
        </div>
    )
  }