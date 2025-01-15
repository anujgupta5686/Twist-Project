  # DevTinder APIs
## authRouter
- POST /signup
- POST /login
- POST /logout
## profileRouter
- GET /profile/view
- PATCH /prifile/edit
- PATCH /profile/password
## connectionRequestRouter
- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId

## userRouter
- GET /user/connections
- GET /user/requests
- GET /user/feed - Get you the profile of other users an platform

Status: ignored, interested, accepted, rejected