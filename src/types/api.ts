/** A review document as stored in MongoDB. */
export interface Review {
  _id?: string;
  rating: number;
  email: string;
  comment?: string;
  createdAt?: Date;
}

/** Shape of the POST /api/reviews request body. */
export interface ReviewRequestBody {
  rating: number;
  email: string;
  comment?: string;
}

/** Standard API error response shape. */
export interface ApiErrorResponse {
  message: string;
}

/** Standard API success response shape. */
export interface ApiSuccessResponse {
  message: string;
}
