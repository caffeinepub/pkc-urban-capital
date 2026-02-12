# PKC Urban Capital - Deployment Guide

This guide provides step-by-step instructions for deploying the PKC Urban Capital application to production.

## Production Slug Configuration

**CRITICAL**: The production deployment **must** use the exact slug: `pkcurbancapital`

- Production URL: `https://pkcurbancapital.caffeine.ai`
- Do NOT use draft suffixes or random identifiers
- This configuration is pinned in `frontend/deploy.config.json`

## Pre-Deployment Checklist

Before deploying, ensure:

1. ✅ All TypeScript compilation errors are resolved
2. ✅ Production build completes successfully (`npm run build`)
3. ✅ Backend canister is deployed and accessible
4. ✅ Environment variables are correctly configured
5. ✅ All tests pass (if applicable)

## Build Process

### 1. Install Dependencies

