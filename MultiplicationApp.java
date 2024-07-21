import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class MultiplicationApp extends JFrame {
    private JTextField number1Field;
    private JTextField number2Field;
    private JTextField resultField;
    private JButton okButton;
    private JButton exitButton;

    public MultiplicationApp() {
        // Create the frame
        setTitle("Multiplication Application");
        setSize(300, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new GridLayout(4, 2));

        // Create and add the components
        JLabel number1Label = new JLabel("Enter first number:");
        number1Field = new JTextField();

        JLabel number2Label = new JLabel("Enter second number:");
        number2Field = new JTextField();

        JLabel resultLabel = new JLabel("Result:");
        resultField = new JTextField();
        // resultField.setEditable(false);

        okButton = new JButton("OK");
        exitButton = new JButton("Exit");

        add(number1Label);
        add(number1Field);
        add(number2Label);
        add(number2Field);
        add(resultLabel);
        add(resultField);
        add(okButton);
        add(exitButton);

        // Add action listeners for buttons
        okButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    double num1 = Double.parseDouble(number1Field.getText());
                    double num2 = Double.parseDouble(number2Field.getText());
                    double result = num1 * num2;
                    resultField.setText(String.valueOf(result));
                } catch (NumberFormatException ex) {
                    JOptionPane.showMessageDialog(null, "Please enter valid numbers", "Error",
                            JOptionPane.ERROR_MESSAGE);
                }
            }
        });

        exitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.exit(0);
            }
        });

        // Set the frame to be visible
        setVisible(true);
    }

    public static void main(String[] args) {
        new MultiplicationApp();
    }
}