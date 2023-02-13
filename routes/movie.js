import {Router} from 'express';
import { GetMovies, GetMovieById } from '../controllers/movieController.js';
const router = Router();

router.get('/',GetMovies)
router.get('/:id',GetMovieById)

export default router;