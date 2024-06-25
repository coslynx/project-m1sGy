import os
import pandas as pd
from django.http import JsonResponse

def upload_csv_file(file):
    if not file.name.endswith('.csv'):
        return JsonResponse({'error': 'File is not a CSV'}, status=400)
    
    df = pd.read_csv(file)
    
    return df