export default async function({ $auth, redirect }) {
    let user = $auth.user

    if (user && user.role == 'student') {} else {
        redirect('/login')
    }
}