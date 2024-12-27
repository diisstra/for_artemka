import { Field,TextField, Flex,Button,Grid,Form } from "@prismane/core";
import { useState } from "react";


function MyGrid() {
    const [values, setValues] = useState("");


  return (
    <Grid  templateColumns={8} templateRows={4}  >
        <Grid.Item columnStart={1} columnEnd={2} rowStart={2} rowEnd={5} bg="primary">
        Левая часть
        </Grid.Item>
        <Grid.Item columnStart={1} columnEnd={9} rowStart={1} rowEnd={2} bg="lime">
        Верхушечка
        </Grid.Item>
        <Grid.Item columnStart={2} columnEnd={9} rowStart={2} rowEnd={4} bg="teal">
        Основная часть
                <Form
                onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.target;

                    const data = new FormData(form);

                    setValues(data); //Вот тут можешь сделать функцию сохранения своих жанных и по идее должно рабоатть
                }}
                onReset={() => {
                    setValues("");
                }}
                >
                <TextField
                    name="username"
                    placeholder="Enter username: "
                    label="Username:"
                />
                <Flex align="center" gap={(1)}>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                    <Button variant="primary" type="reset">
                    Reset
                    </Button>
                </Flex>
                Values: {JSON.stringify(values)}
                </Form>

        </Grid.Item>
        <Grid.Item columnStart={2} columnEnd={9} rowStart={4} rowEnd={5} bg="ruby">
        Нижняя 
        
        <Button variant="primary" color="lime" size="md" full>Отправочка (Я кнопка)</Button>
        </Grid.Item>
  </Grid>
  
  )

}

export default MyGrid