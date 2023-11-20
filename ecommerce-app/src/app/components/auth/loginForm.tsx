export default function LoginForm(){
    return (
        <form className="w-75 h-75 d-flex flex-column justify-content-around">
            <h1 className="text-center fw-bold">BIENVENUE</h1>
            <p className="text-center">Accéder à votre compte en vous connectant</p>
            <div className="form-group">
                <label className="fw-bold">Nom d'utilisateur</label>
                <input type="text" className="form-control py-3 bg-light" placeholder="Enter your username"/>
            </div>
            <div className="form-group">
                <label className="fw-bold">Mot de Passe</label>
                <input type="password" className="form-control py-3 bg-light" placeholder="Enter your password"/>
            </div>
            <button type="submit" className="btn btn-dark py-3">Se Connecter</button>
        </form>
    )
}