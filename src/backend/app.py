import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
import pandas as pd
import pickle
import warnings
warnings.filterwarnings("ignore")

dataset = pd.read_csv('Career Guidance.csv')

X = dataset.iloc[:, 5:32]

y = dataset.iloc[:, -1]

# Splitting Training and Test Set
# Since we have a very small dataset, we will train our model with all availabe data.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=0)
log_reg = LogisticRegression()


# Fitting model with trainig data
log_reg.fit(X_train, y_train)

pickle.dump(log_reg, open('model.pkl', 'wb'))
model = pickle.load(open('model.pkl', 'rb'))
