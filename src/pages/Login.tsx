import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Container,
  Alert,
  CircularProgress,
  Link,
  Paper,
} from "@mui/material";
import { supabase } from "../lib/supabaseClient";
import { AuthError } from "@supabase/supabase-js";

type AuthView = "SIGN_IN" | "SIGN_UP" | "FORGOT_PASSWORD" | "UPDATE_PASSWORD";

export default function AuthPage(): JSX.Element {
  const [view, setView] = useState<AuthView>("SIGN_IN");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (user) {
      console.log("Logged in as:", user.email);
    } else {
      console.log("Not logged in");
    }
  };

  checkUser();
  // Handle URL hash for Password Reset
  // Supabase sends users to your site with a recovery token in the URL
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      if (event === "PASSWORD_RECOVERY") {
        setView("UPDATE_PASSWORD");
      }
    });
  }, []);

  const handleAuth = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      let error: AuthError | null = null;

      if (view === "SIGN_IN") {
        const result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        error = result.error;
      } else if (view === "SIGN_UP") {
        const result = await supabase.auth.signUp({ email, password });
        error = result.error;
        if (!error)
          setMessage({
            type: "success",
            text: "Check your email for the confirmation link!",
          });
      } else if (view === "FORGOT_PASSWORD") {
        const result = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin, // Sends user back here to trigger UPDATE_PASSWORD
        });
        error = result.error;
        if (!error)
          setMessage({
            type: "success",
            text: "Password reset link sent to your email.",
          });
      } else if (view === "UPDATE_PASSWORD") {
        const result = await supabase.auth.updateUser({ password });
        error = result.error;
        if (!error) {
          setMessage({
            type: "success",
            text: "Password updated! You can now sign in.",
          });
          setView("SIGN_IN");
        }
      }

      if (error) throw error;
    } catch (err) {
      const authError = err as AuthError;
      setMessage({ type: "error", text: authError.message });
    } finally {
      setLoading(false);
    }
  };

  const renderTitle = () => {
    switch (view) {
      case "SIGN_IN":
        return "Welcome Back";
      case "SIGN_UP":
        return "Create Account";
      case "FORGOT_PASSWORD":
        return "Reset Password";
      case "UPDATE_PASSWORD":
        return "Set New Password";
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={6}
        sx={{
          mt: 8,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
        }}
      >
        <Typography component="h1" variant="h5" fontWeight="bold" gutterBottom>
          {renderTitle()}
        </Typography>

        {message && (
          <Alert severity={message.type} sx={{ width: "100%", mb: 2 }}>
            {message.text}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleAuth}
          sx={{ mt: 1, width: "100%" }}
        >
          {/* Email field hidden only during final password update */}
          {view !== "UPDATE_PASSWORD" && (
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}

          {/* Password field hidden during forgot password request */}
          {view !== "FORGOT_PASSWORD" && (
            <TextField
              margin="normal"
              required
              fullWidth
              label={view === "UPDATE_PASSWORD" ? "New Password" : "Password"}
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{ mt: 3, mb: 2, py: 1.5 }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              renderTitle()
            )}
          </Button>

          {/* View Toggles */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: "center",
            }}
          >
            {view === "SIGN_IN" && (
              <>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setView("FORGOT_PASSWORD")}
                >
                  Forgot password?
                </Link>
                <Link
                  component="button"
                  variant="body2"
                  onClick={() => setView("SIGN_UP")}
                >
                  Don't have an account? Sign Up
                </Link>
              </>
            )}
            {(view === "SIGN_UP" || view === "FORGOT_PASSWORD") && (
              <Link
                component="button"
                variant="body2"
                onClick={() => setView("SIGN_IN")}
              >
                Already have an account? Sign In
              </Link>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
