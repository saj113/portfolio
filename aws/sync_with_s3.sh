#!/bin/bash

BUCKET_NAME="www.oleksandrholub.com"

# Sync the 'build' folder with S3 bucket
aws s3 sync ./build s3://$BUCKET_NAME
