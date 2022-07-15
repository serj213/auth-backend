import { body } from 'express-validator';

export const registValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Минимум 3 символа').isLength({ min: 3 }),
];
