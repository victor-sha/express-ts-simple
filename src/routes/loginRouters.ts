import { Router, Request, Response } from 'express';
import { runInNewContext } from 'vm';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

const router = Router();

// router.get('/', (req, res) => {
//     res.send('Hello there');
// });

// router.get('/login', (req: Request, res: Response) => {
//     res.send(`
//         <form method="POST">
//             <div>
//                 <label>Email: </label>
//                 <input name="email" type="email" />
//             </div>
//             <div>
//                 <label>Password: </label>
//                 <input name="password" type="password" />
//             </div>
//             <button type="submit">Login</div>
//         </form>
//     `);
// });

router.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;

    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true }
        res.redirect('/');
    } else {
        res.send('Invalid email or password');
    }
});

router.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div>
                <div>You ar logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    } else {
        res.send(`
            <div>
                <div>You are not logged in</div>
                <a href="/logout">Logout</a>
            </div>
        `)
    }
})

router.get('/logout', (req: Request, res: Response) => {
    req.session = undefined;
    res.redirect('/');
})

export { router };
