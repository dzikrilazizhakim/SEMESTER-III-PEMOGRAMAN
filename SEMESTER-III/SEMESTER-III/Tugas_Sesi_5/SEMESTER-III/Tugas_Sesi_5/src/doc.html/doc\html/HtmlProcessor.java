package doc.html; 
import doc.core.DocumentProcessor; 

public class HtmlProcessor implements DocumentProcessor { 
    
    public String process(String c){ return "<html><body>"+c+"</body></html>";} 
    public String getFormatName(){return "HTML";} }