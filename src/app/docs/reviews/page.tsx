'use client';

import React, { useState, useEffect, FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
    _id?: string;
    rating: number;
    email: string;
    comment?: string;
    createdAt?: Date;
}

const StarIcon: FC<{ isFilled: boolean }> = ({ isFilled }) => (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`cursor-pointer ${isFilled ? 'text-yellow-400' : 'text-slate-600'}`}
        fill="currentColor"
        whileHover={{ scale: 1.2, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
    >
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 19.449l-7.416 4.964 1.48-8.279-6.064-5.828 8.332-1.151z"/>
    </motion.svg>
);

const StarRating: FC<{ rating: number; setRating: (rating: number) => void }> = ({ rating, setRating }) => {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
                <div
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(star)}
                >
                    <StarIcon isFilled={(hoverRating || rating) >= star} />
                </div>
            ))}
        </div>
    );
};

export default function ReviewsPage() {
    const [rating, setRating] = useState(0);
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch('/api/reviews');
                if (!response.ok) throw new Error('Failed to fetch reviews');
                const data: Review[] = await response.json();
                setReviews(data);
            } catch { 
                setError('Could not load reviews.');
            }
        };
        fetchReviews();
    }, []);

    const validateEmail = (email: string): boolean => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccessMessage('');

        if (rating === 0) {
            setError('Please select a star rating.');
            return;
        }
        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ rating, email, comment }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong.');
            }

            setSuccessMessage('Thank you for your review!');
            const newReview = { rating, email: `${email.split('@')[0][0]}***@${email.split('@')[1]}`, comment };
            setReviews([newReview, ...reviews]);
            
            setRating(0);
            setEmail('');
            setComment('');
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred.');
            }
        }
    };

    return (
        <div className="text-white max-w-4xl w-full">
            <h1 className="text-5xl font-extrabold tracking-tighter mb-4">Leave a Review</h1>
            <p className="text-lg text-slate-400 mb-8">
                We&apos;d love to hear what you think about MyUI. Share your experience with the community!
            </p>

            <form onSubmit={handleSubmit} className="p-6 bg-slate-900/ ৫০ border border-slate-800 rounded-xl shadow-lg space-y-6">
                <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Your Rating</label>
                    <StarRating rating={rating} setRating={setRating} />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="comment" className="block text-sm font-semibold text-slate-300 mb-2">Your Comments (Optional)</label>
                    <textarea
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                        rows={4}
                        placeholder="Tell us what you liked..."
                    />
                </div>
                <button type="submit" className="w-full px-6 py-3 bg-sky-500 text-white font-semibold rounded-lg hover:bg-sky-600 transition-colors">
                    Submit Review
                </button>
                <AnimatePresence>
                    {error && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-red-400 text-sm text-center">{error}</motion.p>}
                    {successMessage && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-green-400 text-sm text-center">{successMessage}</motion.p>}
                </AnimatePresence>
            </form>

            <div className="mt-12">
                <h2 className="text-3xl font-bold tracking-tight mb-6">Community Reviews</h2>
                <div className="space-y-6">
                    <AnimatePresence>
                        {reviews.map((review, index) => (
                            <motion.div 
                                key={review._id || index} 
                                className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center mb-2">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => <StarIcon key={i} isFilled={i < review.rating} />)}
                                    </div>
                                    <p className="ml-auto text-sm text-slate-500">{`${review.email.split('@')[0][0]}***@${review.email.split('@')[1]}`}</p>
                                </div>
                                <p className="text-slate-300">{review.comment}</p>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
