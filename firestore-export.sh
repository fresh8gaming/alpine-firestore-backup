#!/bin/sh
gcloud config set project $GCLOUD_PROJECT_ID
gcloud firestore export gs://"$GCLOUD_BUCKET_NAME" --collection-ids=local-product-skins,local-skins,production-product-skins,production-products,production-skins,staging-product-skins,staging-products,staging-skins,test-skins
