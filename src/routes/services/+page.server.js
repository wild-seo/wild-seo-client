import { loadStripe } from '@stripe/stripe-js';
import { env } from '$env/dynamic/private';

const stripe = await loadStripe(env.STRIPE_PUBLISHABLE_KEY);

export function load() {}
