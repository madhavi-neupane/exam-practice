import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class TextFileExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String fileName = "userInput.txt";

        System.out.println("Enter a line of text:");
        String userInput = scanner.nextLine();

        // Write the user input to a file
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write(userInput);
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }

        // Read the text back from the file and display it
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line = reader.readLine();
            System.out.println("Text read from file: " + line);
        } catch (IOException e) {
            System.out.println("Error reading from file: " + e.getMessage());
        }

        scanner.close();
    }
}
