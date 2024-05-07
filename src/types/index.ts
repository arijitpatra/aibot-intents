interface Expression {
  id: string;
  text: string;
}

interface TrainingData {
  expressionCount: number;
  expressions: Expression[];
}

interface Reply {
  id: string;
  text: string;
}

export interface IntentResponse {
  id: string;
  name: string;
  description: string;
  trainingData: TrainingData;
  reply: Reply;
}
