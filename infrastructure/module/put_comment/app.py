import json



def lambda_handler(event, context):


    return {
        "statusCode": 200,
        "body": json.dumps({
            "message": "Put comments",
            # "location": ip.text.replace("\n", "")
        }),
    }