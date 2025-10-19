package doc.txt; 
import doc.core.DocumentProcessor; 

public class PlainTextProcessor implements DocumentProcessor { 
    public String process(String c){return c;} 
    public String getFormatName(){return "Plain Text";} }