# Lab Activity 4 - TODO

## Step 1: Confirm current structure
- [x] Reviewed routing in `src/App.jsx`
- [x] Reviewed Navbar in `src/components/Navbar.jsx`
- [x] Reviewed existing `src/pages/NotFoundPage.jsx`

## Step 2: Routing updates
- [ ] Update `src/App.jsx` to add `/signin` and temporary `/signup` redirect to NotFoundPage
- [ ] Ensure `*` route stays mapped to NotFoundPage

## Step 3: Navbar access points
- [ ] Update `src/components/Navbar.jsx` to add Sign In (/signin) and Sign Up (/signup)
- [ ] Keep responsive behavior + active link styling

## Step 4: Add reusable auth UI components
- [ ] Create `src/components/auth/AuthCard.jsx`
- [ ] Create `src/components/auth/AuthInput.jsx`
- [ ] Create `src/components/auth/CheckboxRow.jsx`
- [ ] (Optional if needed) Create `src/components/auth/AuthLinks.jsx`

## Step 5: Implement SignIn page
- [ ] Add `src/pages/SignInPage.jsx` using reusable components

## Step 6: Implement SignUp page
- [ ] Add `src/pages/SignUpPage.jsx` using reusable components

## Step 7: Verify NotFoundPage meets requirements
- [ ] Ensure `src/pages/NotFoundPage.jsx` shows: 404, “Oops! Page not found.”, Return Home button

## Step 8: Run & test
- [ ] Run dev server
- [ ] Test /signin UI
- [ ] Test Navbar links
- [ ] Test /signup temporarily shows custom NotFoundPage

